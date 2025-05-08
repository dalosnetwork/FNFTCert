from app.repository.base_repository import BaseRepository
from app.models.certificate import Certificate
from app.models.certificate_owner import CertificateOwner
from datetime import datetime

class CertificateRepository(BaseRepository):
    def __init__(self, db):
        self.model = Certificate
        super().__init__(db)

    def create_certificate_with_owner(self, certificate_id: str, gram_amount: float, customer_id: str):
        cert = self.create(
            certificate_id=certificate_id,
            gram=gram_amount,
            create_time=datetime.utcnow()
        )

        owner_repo = BaseRepository(CertificateOwner, self.db)
        owner_repo.create(
            certificate_id=certificate_id,
            customer_id=customer_id
        )

        return cert
