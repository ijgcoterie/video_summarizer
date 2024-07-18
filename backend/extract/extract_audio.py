from moviepy.editor import VideoFileClip

def extract_audio(video_path, audio_path, start_time=0, end_time=None):
    video = VideoFileClip(video_path)
    if end_time is None:
        end_time = video.duration
    
    # Extract the relevant subclip and its audio
    subclip = video.subclip(start_time, end_time)
    subclip.audio.write_audiofile(audio_path)

