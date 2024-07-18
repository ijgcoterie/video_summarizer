from flask import Flask
from flask_session import Session
from authlib.integrations.flask_client import OAuth
from dotenv import load_dotenv
import os

load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

def create_app():
    app = Flask(__name__)
    app.secret_key = os.getenv('SECRET_KEY', 'default-secret-key')
    app.config['SESSION_TYPE'] = 'filesystem'
    Session(app)

    oauth = OAuth(app)
    google = oauth.register(
        name='google',
        client_id=os.getenv('GOOGLE_CLIENT_ID'),
        client_secret=os.getenv('GOOGLE_CLIENT_SECRET'),
        access_token_url='https://accounts.google.com/o/oauth2/token',
        access_token_params=None,
        authorize_url='https://accounts.google.com/o/oauth2/auth',
        authorize_params=None,
        redirect_uri='http://localhost:5000/auth/google/callback',
        client_kwargs={'scope': 'openid profile email'}
    )

    from .auth import auth_blueprint
    app.register_blueprint(auth_blueprint)

    return app
