import librosa
import torch
from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor

# Load pre-trained model and processor
processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")
model = Wav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-base-960h")

def transcribe_audio(audio_path):
    # Load audio
    speech, rate = librosa.load(audio_path, sr=16000)

    # Tokenize and get input values
    input_values = processor(speech, return_tensors="pt", sampling_rate=16000).input_values

    # Get logits
    with torch.no_grad():
        logits = model(input_values).logits

    # Get predicted ids
    predicted_ids = torch.argmax(logits, dim=-1)

    # Decode to transcription
    transcription = processor.decode(predicted_ids[0])
    return transcription
