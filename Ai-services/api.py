from fastapi import FastAPI, UploadFile, File, Body
from fastapi.middleware.cors import CORSMiddleware
import shutil
import uvicorn
import os
from predict import predict_image

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# Disease Info
# =========================
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

# =========================
# Doctors Database
# =========================
doctors_db = [
    {
        "id": 1,
        "name": "Dr. Ankita Sharma",
        "specialty": "General Dermatologist",
        "location": "Delhi",
        "experience": "5 years",
        "rating": 4.5,
        "expertise": ["Acne", "Eczema"]
    },
    {
        "id": 2,
        "name": "Dr. Raj Mehta",
        "specialty": "Skin Cancer Specialist",
        "location": "Mumbai",
        "experience": "10 years",
        "rating": 4.8,
        "expertise": ["Melanoma"]
    },
    {
        "id": 3,
        "name": "Dr. Trisha Verma",
        "specialty": "Dermatologist",
        "location": "Online",
        "experience": "7 years",
        "rating": 4.6,
        "expertise": ["Acne", "Eczema", "Melanoma"]
    },
    {
        "id": 4,
        "name": "Dr. Ankit Barnawal",
        "specialty": "Cosmetic Dermatologist",
        "location": "Bangalore",
        "experience": "6 years",
        "rating": 4.4,
        "expertise": ["Acne"]
    },
    {
        "id": 5,
        "name": "Dr. Neha Kapoor",
        "specialty": "Dermatologist",
        "location": "Chandigarh",
        "experience": "8 years",
        "rating": 4.7,
        "expertise": ["Eczema", "Acne"]
    },
    {
        "id": 6,
        "name": "Dr. Rahul Singh",
        "specialty": "Dermatology Consultant",
        "location": "Lucknow",
        "experience": "9 years",
        "rating": 4.3,
        "expertise": ["Eczema"]
    },
    {
        "id": 7,
        "name": "Dr. Sneha Iyer",
        "specialty": "Skin Specialist",
        "location": "Chennai",
        "experience": "11 years",
        "rating": 4.9,
        "expertise": ["Melanoma"]
    },
    {
        "id": 8,
        "name": "Dr. Arjun Patel",
        "specialty": "Dermatologist",
        "location": "Ahmedabad",
        "experience": "6 years",
        "rating": 4.2,
        "expertise": ["Acne", "Eczema"]
    },
    {
        "id": 9,
        "name": "Dr. Kavya Reddy",
        "specialty": "Dermatologist",
        "location": "Hyderabad",
        "experience": "7 years",
        "rating": 4.6,
        "expertise": ["Eczema"]
    },
    {
        "id": 10,
        "name": "Dr. Vikram Joshi",
        "specialty": "Skin Cancer Specialist",
        "location": "Pune",
        "experience": "12 years",
        "rating": 4.8,
        "expertise": ["Melanoma"]
    },
    {
        "id": 11,
        "name": "Dr. Priya Nair",
        "specialty": "Dermatologist",
        "location": "Kochi",
        "experience": "5 years",
        "rating": 4.4,
        "expertise": ["Acne"]
    },
    {
        "id": 12,
        "name": "Dr. Mohit Agarwal",
        "specialty": "Dermatology Specialist",
        "location": "Jaipur",
        "experience": "9 years",
        "rating": 4.5,
        "expertise": ["Acne", "Eczema", "Melanoma"]
    }
]

# =========================
# NEW: Appointment Storage
# =========================
appointments = []

# =========================
# Recommendation Logic
# =========================
def recommend_doctors(disease):
    matched = []
    for doctor in doctors_db:
        if disease in doctor["expertise"]:
            matched.append(doctor)
    return matched[:3]

# =========================
# AI Prediction API
# =========================
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    file_location = "temp.jpg"

    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    disease, confidence = predict_image(file_location)

    if os.path.exists(file_location):
        os.remove(file_location)

    info = disease_info.get(disease, {
        "causes": "Information not available.",
        "solution": "Consult a dermatologist for professional advice."
    })

    recommended = recommend_doctors(disease)

    return {
        "disease": disease,
        "confidence": confidence,
        "causes": info["causes"],
        "solution": info["solution"],
        "doctors": recommended
    }

# =========================
# Doctors API
# =========================
@app.get("/doctors")
def get_doctors():
    return doctors_db

# =========================
# NEW: Book Appointment API
# =========================
@app.post("/book")
def book_appointment(data: dict = Body(...)):
    appointments.append(data)
    return {"message": "Appointment booked successfully"}

# =========================
# NEW: Get Appointments
# =========================
@app.get("/appointments")
def get_appointments():
    return appointments

# =========================
# Run Server
# =========================
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)