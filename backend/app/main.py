from fastapi import FastAPI
from app.routes.contract_trigger import router

app = FastAPI(title="Certification API Structure", 
              description="API for managing certification processes",
              version="1.0.0")

app.include_router(router)
