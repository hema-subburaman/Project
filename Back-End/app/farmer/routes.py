from flask import Blueprint, request, jsonify
from app.models import db, Farmer, User

farmer_bp = Blueprint("farmer", __name__)

# Add farmer details (only once per user)
@farmer_bp.route("/addfarmerdetails", methods=["POST"])
def add_farmer():
    data = request.get_json()

    user_id = data.get("user_id")  # pass logged-in user id from frontend
    name = data.get("name")
    gender = data.get("gender")
    age = data.get("age")
    is_farmer = data.get("farmer")

    # ✅ Check if this user already has farmer details
    existing_farmer = Farmer.query.filter_by(user_id=user_id).first()
    if existing_farmer:
        return jsonify({"message": "Farmer details already submitted!"}), 400

    # Create new farmer
    new_farmer = Farmer(
        user_id=user_id,
        name=name,
        gender=gender,
        age=age,
        is_farmer=is_farmer
    )
    db.session.add(new_farmer)

    # ✅ Update user role and has_details
    user = User.query.get(user_id)
    if user:
        user.role = "farmer"
        user.has_details = True

    db.session.commit()

    return jsonify({
        "message": "Farmer details added successfully!",
        "farmer": new_farmer.to_dict(),
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "role": user.role
        }
    }), 201


# Get all farmers
@farmer_bp.route("/listfarmerdetails", methods=["GET"])
def list_farmers():
    farmers = Farmer.query.all()
    return jsonify([farmer.to_dict() for farmer in farmers]), 200


# ✅ Get farmer details by user_id
@farmer_bp.route("/getfarmer/<int:user_id>", methods=["GET"])
def get_farmer(user_id):
    farmer = Farmer.query.filter_by(user_id=user_id).first()
    if farmer:
        return jsonify({
            "id": farmer.id,
            "name": farmer.name,
            "gender": farmer.gender,
            "age": farmer.age,
            "is_farmer": farmer.is_farmer
        }), 200
    else:
        return jsonify({"message": "No farmer details found"}), 404
