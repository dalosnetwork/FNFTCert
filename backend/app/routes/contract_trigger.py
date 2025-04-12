from fastapi import APIRouter
from pydantic import BaseModel
from app.services.contract_service import merge

router = APIRouter()

class MergeRequest(BaseModel):
    addresses: list[str]
    amounts: list[int]
    isSBT: bool
    NFTName: str
    NFTDescription: str
    imageLink: str
    externalLink: str

@router.post("/merge")
async def merge(request: MergeRequest):
    result = merge(request.message)
    return {"contract_response": result}
