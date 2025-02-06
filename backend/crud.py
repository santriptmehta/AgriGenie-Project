from sqlalchemy.orm import Session
from . import models

def save_char(db: Session, query: str, response: str):
    chat_entry = models.ChatHistory(user_qeury=query, bot_response=response)
    db.add(chat_entry)
    db.commit()
    db.refresh(chat_entry)
    return chat_entry

def get_chat_history(db : Session):
    return db.query(models.ChatHistory).all()