from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from . import models, database, schemas, crud

app = FastAPI()

models.Base.metadata.create_all(bind=database.engine)

@app.post("/char")
def chat():
    pass

@app.get("/history")
def get_chat_history():
    pass