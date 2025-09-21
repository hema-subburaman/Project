from flask import Blueprint, request, jsonify
from app.models import db, Farmer

farmer_bp = Blueprint("farmer", __name__)

# Create new farmer entry
@farmer_bp.route("/addfarmerdetails", methods=["POST"])
def add_farmer():
    data = request.get_json()

    name = data.get("name")
    gender = data.get("gender")
    age = data.get("age")
    is_farmer = data.get("farmer")

    # ✅ Check if farmer already exists
    existing_farmer = Farmer.query.filter_by(name=name, gender=gender, age=age).first()
    if existing_farmer:
        return jsonify({"message": "Farmer already exists!"}), 400

    # Create new farmer
    new_farmer = Farmer(
        name=name,
        gender=gender,
        age=age,
        is_farmer=is_farmer
    )
    db.session.add(new_farmer)
    db.session.commit()

    return jsonify({
        "message": "Farmer added successfully!",
        "farmer": {
            "id": new_farmer.id,
            "name": new_farmer.name,
            "gender": new_farmer.gender,
            "age": new_farmer.age,
            "is_farmer": new_farmer.is_farmer
        }
    }), 201



# Get all farmers
@farmer_bp.route("/listarmerdetails", methods=["GET"])
def list_farmers():
    farmers = Farmer.query.all()
    return jsonify([farmer.to_dict() for farmer in farmers]), 200
