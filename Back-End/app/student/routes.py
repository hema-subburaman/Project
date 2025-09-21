from flask import Blueprint, request, jsonify
from app.models import db, Student

student_bp = Blueprint("student", __name__)

# Create new student entry
@student_bp.route("/addstudentdetails", methods=["POST"])
def add_student():
    data = request.get_json()

    name = data.get("name")
    gender = data.get("gender")
    age = data.get("age")
    profession = data.get("profession")

    # ✅ Check if student already exists
    existing_student = Student.query.filter_by(name=name, gender=gender, age=age).first()
    if existing_student:
        return jsonify({"message": "Student already exists!"}), 400

    # Create new student
    new_student = Student(
        name=name,
        gender=gender,
        age=age,
        profession=profession
    )
    db.session.add(new_student)
    db.session.commit()

    return jsonify({
        "message": "Student added successfully!",
        "student": {
            "id": new_student.id,
            "name": new_student.name,
            "gender": new_student.gender,
            "age": new_student.age,
            "profession": new_student.profession
        }
    }), 201



# Get all students
@student_bp.route("/listarmerdetails", methods=["GET"])
def list_students():
    students = Student.query.all()
    return jsonify([student.to_dict() for student in students]), 200
