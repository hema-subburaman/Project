py -3 -m venv venv
venv\Scripts\Activate.ps1

pip install -r requirements.txt
pip install psycopg2-binarypip freeze > requirements.txt

Create a .env file in the project root:
DATABASE_URL=sqlite:///dev.db
JWT_SECRET_KEY=super-secret-key
SECRET_KEY=flask-secret