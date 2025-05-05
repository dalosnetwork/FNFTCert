from fastapi import APIRouter, Depends, HTTPException
from app.repository.login_repository import LoginRepository
from app.utils.helpers import create_access_token
from pydantic import BaseModel

router = APIRouter()

class ApiLoginRequest(BaseModel):
    api_key: str

@router.post("/login_with_api")
def login_with_api(request: ApiLoginRequest, repo: LoginRepository = Depends()):
    user = repo.authenticate_by_api_key(api_key=request.api_key)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid API key")

    token = create_access_token(user_id=user.id)
    return {"access_token": token}
