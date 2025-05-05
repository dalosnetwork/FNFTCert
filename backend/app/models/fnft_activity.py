from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from app.repository.session import Base

class FNFTActivity(Base):
    __tablename__ = "fnft_activity"

    id = Column(Integer, primary_key=True, index=True)
    token_id = Column(Integer, nullable=False)
    transaction_hash = Column(String, nullable=False)
    date = Column(DateTime, default=datetime.utcnow)
