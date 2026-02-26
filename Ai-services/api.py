# api.py

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import uvicorn
import os
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

# Knowledge Layer (Disease Information Mapping)
disease_info = {
    "Acne": {
        "causes": "Excess oil production, clogged pores, bacteria buildup, and hormonal changes.",
        "solution": "Use mild cleansers, avoid oily skincare products, apply topical treatments like benzoyl peroxide, and consult a dermatologist if severe."
    },
    "Eczema": {
        "causes": "Genetic factors, allergies, environmental irritants, and immune system response.",
        "solution": "Moisturize regularly, avoid known triggers, use prescribed corticosteroid creams, and maintain skin hydration."
    },
    "Melanoma": {
        "causes": "Excess UV exposure from sunlight, genetic mutations in skin cells.",
        "solution": "Immediate medical consultation is required. Treatment may include biopsy, surgical removal, or advanced therapies."
    },
    "Normal": {
        "causes": "No visible skin disease detected.",
        "solution": "Maintain proper skincare routine and sun protection."
    }
}


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    file_location = "temp.jpg"

    # Save uploaded file temporarily
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Run AI prediction
    disease, confidence = predict_image(file_location)

    # Remove temp file
    if os.path.exists(file_location):
        os.remove(file_location)

    # Get disease info from dictionary
    info = disease_info.get(disease, {
        "causes": "Information not available.",
        "solution": "Consult a dermatologist for professional advice."
    })

    return {
        "disease": disease,
        "confidence": confidence,
        "causes": info["causes"],
        "solution": info["solution"]
    }


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)