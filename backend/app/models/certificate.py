from sqlalchemy import Column, Integer, String, Float, DateTime
from app.repository.session import Base
from datetime import datetime

class Certificate(Base):
    __tablename__ = "certificates"

    id = Column(Integer, primary_key=True, index=True)
    certificate_id = Column(String, unique=True, index=True, nullable=False)
    gram = Column(Float, nullable=False)
    create_time = Column(DateTime, default=datetime.utcnow)
