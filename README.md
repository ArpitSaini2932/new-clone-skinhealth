**🩺 SkinHealth – AI-Based Skin Disease Detection System**

SkinHealth is a full-stack AI-powered web application that detects common skin conditions from uploaded images using a deep learning model.

The system integrates a React frontend, FastAPI backend, and a PyTorch-trained MobileNetV2 model to provide real-time skin condition predictions.

This project was developed as an academic minor project to demonstrate practical AI integration in a healthcare-inspired application.

🚀 Features

Upload skin image for AI-based prediction

Deep Learning model using MobileNetV2 (Transfer Learning)

Real-time inference via FastAPI

Modern, clean React UI (Tailwind CSS)

Redux state management

Confidence score visualization

Modular full-stack architecture

API documentation via Swagger

🧠 Tech Stack
Frontend

React.js (Vite)

Redux Toolkit

React Router DOM

Tailwind CSS

Axios

Backend (AI Service)

FastAPI

PyTorch

Torchvision

Pillow

Uvicorn

Python-Multipart

🏗️ Project Structure
cloneSkinHealth/
│
├── SkinHealth+/              # React Frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── Ai-services/              # AI Backend
│   ├── api.py
│   ├── train.py
│   ├── predict.py
│   ├── model.py
│   ├── requirements.txt
│   └── dataset/              # (ignored in Git)
│
├── README.md
└── .gitignore
⚙️ How To Run The Project
1️⃣ Start the AI Backend
cd Ai-services
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python api.py

Backend runs at:

http://localhost:8000

Swagger API Docs:

http://localhost:8000/docs
2️⃣ Start the Frontend
cd SkinHealth+
npm install
npm run dev

Frontend runs at:

http://localhost:5173
🧪 AI Model Details

Architecture: MobileNetV2 (Pretrained on ImageNet)

Method: Transfer Learning

Input Size: 224x224

Loss Function: CrossEntropyLoss

Optimizer: Adam

Device: CPU / GPU (auto-detected)

Training the Model

To train the model:

cd Ai-services
python train.py

This generates:

skin_model.pth

Note:
The dataset and trained model file are excluded from Git to keep the repository lightweight.

📊 API Endpoint
POST /predict

Input:

multipart/form-data

file (image)

Response:

{
  "disease": "Eczema",
  "confidence": 0.92
}
🔄 System Workflow

User uploads image from React frontend

Image sent to FastAPI backend via Axios

Backend preprocesses image

Trained PyTorch model performs inference

Prediction + confidence returned as JSON

Redux updates state

UI displays result with confidence bar

⚠️ Disclaimer

This system is developed strictly for educational and academic purposes.

It is not a medical diagnostic tool and should not replace professional dermatological consultation.

🔮 Future Enhancements

Appwrite integration for authentication and storage

Prediction history tracking

Dermatologist appointment booking

Improved model accuracy with larger dataset

Cloud deployment (Docker / Render / AWS)

Model performance evaluation dashboard

👨‍💻 Author

Arpit Saini
BCA Student | AI & Full-Stack Developer
Focused on building practical AI-powered applications.
