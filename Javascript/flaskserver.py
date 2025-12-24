from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

def get_db_connection():
    print(".........Request connection for MySQL database........")
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="vISHESH@1234567",
        database="fullstack"
    )


@app.route("/save", methods=["POST"])
def save():
    first_name = request.form.get("first-name")
    last_name = request.form.get("last-name")
    if not first_name or not last_name:
        return jsonify({"error": "Missing data"}), 400
    
    db = get_db_connection()
    cursor = db.cursor()
    sql = "INSERT INTO  firsttable(FirstName,LastName)values(%s,%s)"
    cursor.execute(sql, (first_name, last_name))
    db.commit()

    
    return jsonify({"message": "Data saved successfully"})

if __name__ == "__main__":
    app.run(debug=True)
