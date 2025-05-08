from app.repository.base_repository import BaseRepository
from app.models.fnft_activity import FNFTActivity

class FNFTActivityRepository(BaseRepository):
    def __init__(self, db):
        self.model = FNFTActivity
        super().__init__(db)

    def create_activity(self, token_id: int, transaction_hash: str):
        return self.create(
            token_id=token_id,
            transaction_hash=transaction_hash
        )
