from flask import Blueprint, request, jsonify
from app.models import db, GeneralUser

generaluser_bp = Blueprint("generaluser", __name__)

# Create new farmer entry
@generaluser_bp.route("/addgeneraluserdetails", methods=["POST"])
def add_farmer():
    data = request.get_json()

    name = data.get("name")
    gender = data.get("gender")
    age = data.get("age")
    is_gardeneing = data.get("is_gardeneing")

    # ✅ Check if farmer already exists
    existing_generaluser = GeneralUser.query.filter_by(name=name, gender=gender, age=age).first()
    if existing_generaluser:
        return jsonify({"message": "General User already exists!"}), 400

    # Create new farmer
    new_generaluser = GeneralUser(
        name=name,
        gender=gender,
        age=age,
        is_gardeneing=is_gardeneing
    )
    db.session.add(new_generaluser)
    db.session.commit()

    return jsonify({
        "message": "General User added successfully!",
        "farmer": {
            "id": new_generaluser.id,
            "name": new_generaluser.name,
            "gender": new_generaluser.gender,
            "age": new_generaluser.age,
            "is_gardeneing": new_generaluser.is_gardeneing
        }
    }), 201



# Get all farmers
@generaluser_bp.route("/listgeneraluserdetails", methods=["GET"])
def list_generalusers():
    generalusers = GeneralUser.query.all()
    return jsonify([generaluser.to_dict() for generaluser in generalusers]), 200
