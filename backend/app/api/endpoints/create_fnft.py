from fastapi import APIRouter, Depends, HTTPException
from app.utils.auth import get_current_user
from app.contracts.contract_service import create_new_fnft_onchain
from app.repository.fnft_repository import FNFTActivityRepository
from pydantic import BaseModel

router = APIRouter()

class FNFTRequest(BaseModel):
    nft_id: int
    token_name: str
    token_symbol: str
    total_supply: int

@router.post("/create_fnft")
def create_fnft(request: FNFTRequest, repo: FNFTActivityRepository = Depends(), user_id: int = Depends(get_current_user)):
    try:
        tx_hash = create_new_fnft_onchain(
            nft_id=request.nft_id,
            token_name=request.token_name,
            token_symbol=request.token_symbol,
            total_supply=request.total_supply
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Blockchain error: {str(e)}")

    repo.create_activity(
        token_id=request.nft_id,
        transaction_hash=tx_hash
    )

    return {"message": "FNFT created successfully", "tx_hash": tx_hash}
