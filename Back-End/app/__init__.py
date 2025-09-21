from flask import Flask
from .config import Config
from .extensions import db, migrate, jwt, cors
from .auth.routes import auth_bp
from .farmer.routes import farmer_bp
from .student.routes import student_bp
from .general.routes import generaluser_bp
from .quiz.routes import quiz_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": ["http://localhost:5173"]}})

    # ✅ Import models here so Migrate can see them
    from .models import User, Farmer, Student, GeneralUser  

    # register blueprints
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(farmer_bp, url_prefix="/api/farmer")
    app.register_blueprint(student_bp, url_prefix="/api/student")
    app.register_blueprint(generaluser_bp, url_prefix="/api/general")
    app.register_blueprint(quiz_bp, url_prefix="/api/quiz")

    return app
