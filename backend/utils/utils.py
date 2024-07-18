from extract.extract_audio import extract_audio
from transcribe.transcribe_audio import transcribe_audio
from summarize.summarize_text import summarize_text
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip
from moviepy.editor import VideoFileClip

def summarize_video(video_path, context="", chunk_length=300):
    # Chunk the video
    video_chunks = chunk_video(video_path, chunk_length=chunk_length)
    combined_transcription = ""

    for chunk in video_chunks:
        # Extract audio from video chunk
        audio_path = chunk.replace('.mp4', '.wav')
        extract_audio(chunk, audio_path)
        
        # Transcribe the audio to text
        transcription = transcribe_audio(audio_path)
        combined_transcription += transcription + " "

    # Summarize the combined transcription with context
    summary = summarize_text(combined_transcription, context)
    
    return summary

def chunk_video(video_path, chunk_length=300):
    video = VideoFileClip(video_path)
    video_duration = video.duration
    chunks = []

    for start_time in range(0, int(video_duration), chunk_length):
        end_time = min(start_time + chunk_length, video_duration)
        chunk_path = f"{video_path}_chunk_{start_time}_{end_time}.mp4"
        ffmpeg_extract_subclip(video_path, start_time, end_time, targetname=chunk_path)
        chunks.append(chunk_path)

    return chunks