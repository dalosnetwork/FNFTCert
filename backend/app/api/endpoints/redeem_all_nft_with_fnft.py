from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from app.utils.auth import get_current_user
from app.contracts.contract_service import redeem_all_nft_with_fnft_onchain
from app.repository.fnft_repository import FNFTActivityRepository

router = APIRouter()

class RedeemRequest(BaseModel):
    erc20_address: str

@router.post("/redeem_nft_with_fnft")
def redeem_nft(request: RedeemRequest, user_id: int = Depends(get_current_user)):
    try:
        result = redeem_all_nft_with_fnft_onchain(request.erc20_address)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Blockchain error: {str(e)}")

    FNFTActivityRepository().create_activity(
        token_id=result["token_id"],
        transaction_hash=result["tx_hash"]
    )

    return {
        "message": "NFT redeemed successfully",
        "tx_hash": result["tx_hash"],
        "token_id": result["token_id"]
    }
