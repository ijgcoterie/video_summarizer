from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.utils import summarize_video
import logging
import os
import sys

# Adjusting the PYTHONPATH to include the project root
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

app = Flask(__name__)
CORS(app)

# Set up logging
logging.basicConfig(level=logging.DEBUG)

@app.before_request
def log_request_info():
    app.logger.debug('Request Path: %s', request.path)
    app.logger.debug('Request Method: %s', request.method)
    app.logger.debug('Request Headers: %s', request.headers)
    app.logger.debug('Request Body: %s', request.get_data())

@app.route('/')
def home():
    return "Flask server is running"

@app.route('/summarize', methods=['POST'])
def summarize():
    app.logger.debug("Received a request")
    app.logger.debug(f"Request headers: {request.headers}")
    app.logger.debug(f"Request form data: {request.form}")
    app.logger.debug(f"Request files: {request.files}")
    
    video_file = request.files.get('file')
    context = request.form.get('context', '')
    
    if not video_file:
        app.logger.debug("No file found in request")
        return jsonify({'error': 'No file provided'}), 400
    
    video_path = 'uploaded_video.mp4'
    video_file.save(video_path)
    
    app.logger.debug(f"Saved video file to {video_path}")
    
    summary = summarize_video(video_path, context)
    
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=6000)
