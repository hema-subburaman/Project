from .extensions import db

class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(300), nullable=False)  # increased length

    def __repr__(self):
        return f"<User {self.username}>"

# ✅ Add Farmer model here
class Farmer(db.Model):
    __tablename__ = "farmer"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    is_farmer = db.Column(db.String(10), nullable=False)  # yes/no

    def __repr__(self):
        return f"<Farmer {self.name}>"
    
# ✅ Add Student model here
class Student(db.Model):
    __tablename__ = "student"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    profession = db.Column(db.String(20), nullable=False)  # yes/no

    def __repr__(self):
        return f"<Student {self.name}>"

# ✅ Add General user model here
class GeneralUser(db.Model):
    __tablename__ = "generaluser"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    is_gardeneing = db.Column(db.String(10), nullable=False)  # yes/no

    def __repr__(self):
        return f"<GeneralUser {self.name}>"   
    
class Quiz(db.Model):
    __tablename__ = "quiz"

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(500), nullable=False)
    options = db.Column(db.JSON, nullable=False)  # store options as JSON list
    correct_answer = db.Column(db.String(200), nullable=False)

