from flask import Blueprint, request, jsonify
from app.models import db, Student,User

student_bp = Blueprint("student", __name__)

# Create new student entry
@student_bp.route("/addstudentdetails", methods=["POST"])
def add_student():
    data = request.get_json()

    user_id = data.get("user_id")  # pass logged-in user id from frontend
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
        user_id=user_id,
        name=name,
        gender=gender,
        age=age,
        profession=profession
    )
    db.session.add(new_student)
    # ✅ Update user role and has_details
    user = User.query.get(user_id)
    if user:
        user.role = "student"
        user.has_details = True
    db.session.commit()

    return jsonify({
        "message": "Student added successfully!",
        "student": new_student.to_dict(),
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "role": user.role
        }
    }), 201



# Get all students
@student_bp.route("/liststudentdetails", methods=["GET"])
def list_students():
    students = Student.query.all()
    return jsonify([student.to_dict() for student in students]), 200

# ✅ Get student details by user_id
@student_bp.route("/getstudent/<int:user_id>", methods=["GET"])
def get_student(user_id):
    student = Student.query.filter_by(user_id=user_id).first()
    if student:
        return jsonify({
            "id": student.id,
            "name": student.name,
            "gender": student.gender,
            "age": student.age,
            "profession": student.profession
        }), 200
    else:
        return jsonify({"message": "No student details found"}), 404
