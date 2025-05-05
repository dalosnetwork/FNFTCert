from pydantic import BaseSettings

class Settings(BaseSettings):
    database_url: str
    secret_key: str
    blockchain_rpc_url: str
    contract_address: str
    wallet_address: str
    wallet_private_key: str

    class Config:
        env_file = ".env"

settings = Settings()
