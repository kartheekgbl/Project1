from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db_connection():
    print(".........Request connection for MySQL database........")
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="vISHESH@1234567",
        database="fullstack"
    )

@app.post("/save")
def save(
     first_name: str = Form(..., alias="first-name"),
    last_name: str = Form(..., alias="last-name")
):
    if not first_name or not last_name:
        raise HTTPException(status_code=400, detail="Missing data")

    db = get_db_connection()
    cursor = db.cursor()

    sql = "INSERT INTO firsttable (FirstName, LastName) VALUES (%s, %s)"
    cursor.execute(sql, (first_name, last_name))
    db.commit()

    cursor.close()
    db.close()

    return {"message": "Data saved successfully"}
