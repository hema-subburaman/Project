from .extensions import db

# ================= User Model =================
class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(300), nullable=False)
    role = db.Column(db.String(20), nullable=True)  # farmer / student / general
    has_details = db.Column(db.Boolean, default=False)

    # relationships
    farmer = db.relationship("Farmer", backref="user", uselist=False)
    student = db.relationship("Student", backref="user", uselist=False)
    general_user = db.relationship("GeneralUser", backref="user", uselist=False)

    def __repr__(self):
        return f"<User {self.username}>"

# ================= Farmer Model =================
class Farmer(db.Model):
    __tablename__ = "farmer"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    name = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    is_farmer = db.Column(db.String(10), nullable=False)  # yes/no

    def __repr__(self):
        return f"<Farmer {self.name}>"

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "gender": self.gender,
            "age": self.age,
            "is_farmer": self.is_farmer,
        }

# ================= Student Model =================
class Student(db.Model):
    __tablename__ = "student"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    profession = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return f"<Student {self.name}>"

# ================= General User Model =================
class GeneralUser(db.Model):
    __tablename__ = "generaluser"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    is_gardening = db.Column(db.String(10), nullable=False)  # yes/no
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return f"<GeneralUser {self.name}>"

# ================= Quiz Model =================
class Quiz(db.Model):
    __tablename__ = "quiz"

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(500), nullable=False)
    options = db.Column(db.JSON, nullable=False)  # store options as JSON list
    correct_answer = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f"<Quiz {self.id}>"
