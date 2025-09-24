from flask import Blueprint, request, jsonify
from app.models import db, GeneralUser,User

generaluser_bp = Blueprint("generaluser", __name__)

# Create new generaluser entry
@generaluser_bp.route("/addgeneraluserdetails", methods=["POST"])
def add_generaluser():
    data = request.get_json()

    user_id = data.get("user_id")  # pass logged-in user id from frontend
    name = data.get("name")
    gender = data.get("gender")
    age = data.get("age")
    is_gardening = data.get("is_gardening")

    # ✅ Check if generaluser already exists
    existing_generaluser = GeneralUser.query.filter_by(name=name, gender=gender, age=age).first()
    if existing_generaluser:
        return jsonify({"message": "General User already exists!"}), 400

    # Create new generaluser
    new_generaluser = GeneralUser(
        user_id=user_id,
        name=name,
        gender=gender,
        age=age,
        is_gardening=is_gardening
    )
    db.session.add(new_generaluser)
    # ✅ Update user role and has_details
    user = User.query.get(user_id)
    if user:
        user.role = "generaluser"
        user.has_details = True
    db.session.commit()

    return jsonify({
        "message": "Generaluser details added successfully!",
        "generaluser": new_generaluser.to_dict(),
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "role": user.role
        }
    }), 201



# Get all generalusers
@generaluser_bp.route("/listgeneraluserdetails", methods=["GET"])
def list_generalusers():
    generalusers = GeneralUser.query.all()
    return jsonify([generaluser.to_dict() for generaluser in generalusers]), 200

# ✅ Get generaluser details by user_id
@generaluser_bp.route("/getgeneraluser/<int:user_id>", methods=["GET"])
def get_generaluser(user_id):
    generaluser = generaluser.query.filter_by(user_id=user_id).first()
    if generaluser:
        return jsonify({
            "id": generaluser.id,
            "name": generaluser.name,
            "gender": generaluser.gender,
            "age": generaluser.age,
            "is_gardening": generaluser.is_gardening
        }), 200
    else:
        return jsonify({"message": "No generaluser details found"}), 404
