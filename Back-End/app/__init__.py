from flask import Flask
from .config import Config
from .extensions import db, migrate, jwt, cors

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": ["http://localhost:3000"]}})

    # register blueprints
    from .auth.routes import auth_bp
    from .lessons.routes import lessons_bp
    from .progress.routes import progress_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(lessons_bp, url_prefix="/api/lessons")
    app.register_blueprint(progress_bp, url_prefix="/api/progress")

    return app