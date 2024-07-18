# Video Summarizer

This project is a video summarizer application that extracts audio from video files, transcribes the audio, and generates a summary using OpenAI's GPT-4. The application consists of a backend built with Flask and a frontend built with React. The backend handles video processing, transcription, and summarization, while the frontend provides a user interface for uploading videos and viewing summaries.

## Project Structure

/video_summarizer/
├── backend/
│ ├── app/
│ │ └── **init**.py
│ │ └── auth.py
│ │ └── main.py
│ ├── extract/ <!--- Extract audio from provided video --->
│ │ └── **init**.py
│ │ └── extract_audio.py
│ ├── summarize/ <!--- Summarize transcription from provided video --->
│ │ └── **init**.py
│ │ └── summarize_text.py
│ ├── transcribe/ <!--- Transcribe audio from provided video --->
│ │ └── **init**.py
│ │ └── transcribe_audio.py
│ ├── utils/
│ │ └── **init**.py
│ │ └── utils.py
│ ├── .env
│ ├── app.yaml
│ ├── dependencies.txt
│ ├── Dockerfile
│ ├── README.md
│ ├── requirements.txt
├── frontend/
│ ├── public/
│ ├── src/
│ │ └── components/
│ │ │ └── GoogleLoginButton.tsx <!--- Button component originally built to trigger login with Google. --->
│ │ │ └── Header.tsx <!--- Application Header --->
│ │ │ └── Sidebar.tsx <!--- Application Sidebar --->
│ │ │ └── Summary.tsx <!--- Component to display video summary --->
│ │ │ └── UploadCard.tsx <!--- Card component that will hold data for single video upload --->
│ │ │ └── UploadForm.tsx <!--- Form component to accept file upload --->
│ │ │ └── UploadModal.tsx <!--- Modal component that opens when clicking card component. This will display additional information about the selected upload. --->
│ │ └── lib/
│ │ └── App.css
│ │ └── App.test.js
│ │ └── App.tsx
│ │ └── index.css
│ │ └── index.tsx
│ │ └── setupTests.js
│ ├── components.json
│ ├── Dockerfile
│ ├── README.md
│ ├── tailwind.config.js
│ ├── tsconfig.json
├── .env
├── .gcloudignore
├── .gitignore
├── cloudbuild.yaml
└── README.md
