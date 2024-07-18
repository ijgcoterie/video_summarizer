# Video Summarizer

This project is a video summarizer application that extracts audio from video files, transcribes the audio, and generates a summary using OpenAI's GPT-4. The application consists of a backend built with Flask and a frontend built with React. The backend handles video processing, transcription, and summarization, while the frontend provides a user interface for uploading videos and viewing summaries.

## Project Structure

/video_summarizer/
├── backend/
│ ├── .env
│ ├── summarize/
│ │ └── summarize_text.py
│ ├── Dockerfile
│ ├── requirements.txt
│ └── ...
├── frontend/
│ ├── src/
│ ├── public/
│ ├── Dockerfile
│ └── ...
├── .gitignore
├── cloudbuild.yaml
└── README.md