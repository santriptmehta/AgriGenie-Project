from sqlalchemy import Column, Integer, String, Text
from .database import Base

class ChatHistory(Base):
    __tablename__ = "char_history"

    id = Column(Integer, primary_key=True, index=True)
    user_query = Column(Text, nullable=False)
    bot_response = Column(Text, nullable=False)