from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models import User
from flask_jwt_extended import create_access_token

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json() or {}
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    if not (username and email and password):
        return jsonify({"msg":"username, email and password required"}), 400

    if User.query.filter((User.username==username) | (User.email==email)).first():
        return jsonify({"msg":"user already exists"}), 400

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg":"user created"}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    email = data.get("email")
    password = data.get("password")
    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"msg":"bad credentials"}), 401
    token = create_access_token(identity=user.id)
    return jsonify({"access_token": token, "user":{"id":user.id, "username": user.username}})
