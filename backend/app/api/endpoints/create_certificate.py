from fastapi import APIRouter, Depends, HTTPException
from app.utils.auth import get_current_user
from app.contracts.contract_service import create_new_certificate_onchain
from app.repository.certificate_repository import CertificateRepository
from pydantic import BaseModel

router = APIRouter()

class CertificateRequest(BaseModel):
    name: str
    description: str
    customer_id: str
    certificate_id: str
    gram_amount: float
    image: str

@router.post("/create_new_certificate")
def create_certificate(request: CertificateRequest, repo: CertificateRepository = Depends(), user_id: int = Depends(get_current_user)):
    metadata = {
        "name": request.name,
        "description": request.description,
        "attributes": [
            {"trait_type": "Customer ID", "value": request.customer_id},
            {"trait_type": "Certificate ID", "value": request.certificate_id},
            {"trait_type": "Gram Amount", "value": str(request.gram_amount)}
        ],
        "image": request.image
    }

    try:
        tx_hash = create_new_certificate_onchain(metadata)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Blockchain error: {str(e)}")

    repo.create_certificate_with_owner(
        certificate_id=request.certificate_id,
        gram_amount=request.gram_amount,
        customer_id=request.customer_id
    )

    return {"message": "Certificate created successfully", "tx_hash": tx_hash}
