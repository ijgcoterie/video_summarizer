# Video Summarizer

## Project Structure

- `extract/`: Contains the script to extract audio from video files.
- `transcribe/`: Contains the script to transcribe audio to text.
- `summarize/`: Contains the script to summarize the transcribed text.
- `app/`: Contains the Flask application to provide an API for video summarization.
- `utils/`: Contains utility functions to integrate the different parts.

## Setup

1. Clone the repository.
2. Create and activate a virtual environment.
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
