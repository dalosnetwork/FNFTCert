from fastapi import FastAPI
from app.repository.session import Base, engine
from app.api.endpoints import login, login_with_api, create_certificate, create_fnft, redeem_all_nft_with_fnft

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(login.router, tags=["Login"])
app.include_router(login_with_api.router, tags=["Login With API"])
app.include_router(create_certificate.router, tags=["Create Certificate"])
app.include_router(create_fnft.router, tags=["Create FNFT"])
app.include_router(redeem_all_nft_with_fnft.router, tags=["Redeem All NFT with FNFT"])