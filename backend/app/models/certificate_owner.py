from sqlalchemy import Column, Integer, String, ForeignKey
from app.repository.session import Base

class CertificateOwner(Base):
    __tablename__ = "certificate_owner"

    id = Column(Integer, primary_key=True, index=True)
    certificate_id = Column(String, ForeignKey("certificates.certificate_id"), nullable=False)
    customer_id = Column(String, nullable=False)
