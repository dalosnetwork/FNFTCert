from fastapi import APIRouter, Depends, HTTPException
from app.repository.login_repository import LoginRepository
from app.utils.helpers import create_access_token
from app.utils.auth import verify_2fa_code
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    username: str
    password: str
    two_fa_code: str

@router.post("/login")
def login(request: LoginRequest, repo: LoginRepository = Depends()):
    user = repo.authenticate_user(username=request.username, password=request.password)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid username or password")

    if not verify_2fa_code(user.two_fa_key, request.two_fa_code):
        raise HTTPException(status_code=400, detail="Invalid 2FA code")

    token = create_access_token(user_id=user.id)
    return {"access_token": token}
