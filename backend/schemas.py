from pydantic import BaseModel

class CharRequest(BaseModel):
    query: str

class ChatResponse(BaseModel):
    query : str
    response : str