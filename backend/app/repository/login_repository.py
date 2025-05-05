from app.repository.base_repository import BaseRepository
from app.models.login_info import LoginInfo

class LoginRepository(BaseRepository):
    def __init__(self, db):
        self.model = LoginInfo
        super().__init__(db)

    def authenticate_user(self, username: str, password: str):
        return self.db.query(LoginInfo).filter_by(username=username, password=password).first()

    def authenticate_by_api_key(self, api_key: str):
        return self.db.query(LoginInfo).filter_by(api_key=api_key).first()
