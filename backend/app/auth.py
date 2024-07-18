from flask import Blueprint, request, jsonify, session, redirect
from authlib.integrations.flask_client import OAuth
import os

auth_blueprint = Blueprint('auth', __name__)

oauth = OAuth()
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

@auth_blueprint.route('/auth/google/verify', methods=['POST'])
def verify_token():
    token = request.json.get('token')
    try:
        user_info = google.parse_id_token(token)
        email = user_info['email']
        if email.endswith('@coterie.com'):
            session['user'] = user_info
            return jsonify(user_info)
        else:
            return jsonify({'error': 'Invalid email domain'}), 403
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@auth_blueprint.route('/logout')
def logout():
    session.pop('user', None)
    return redirect('/')

@auth_blueprint.route('/api/protected')
def protected():
    if 'user' in session:
        return jsonify(session['user'])
    else:
        return 'Unauthorized', 401
