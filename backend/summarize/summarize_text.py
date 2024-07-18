import openai
from dotenv import load_dotenv
import os

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def summarize_text(text, context=""):
    system_prompt = "You are a helpful video summarizer. You receive a video transcript and optional context from the requester and provide a summary of the transcript."
    user_prompt = f"Summarize the following video transcript: {text}. Here is some added helpful context as you proceed with summarizing: {context}"
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ]
    )
    
    summary = response.choices[0].message.content
    return summary

