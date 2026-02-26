# api.py

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import uvicorn
from predict import predict_image

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    file_location = "temp.jpg"

    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    disease, confidence = predict_image(file_location)

    return {
        "disease": disease,
        "confidence": confidence
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)