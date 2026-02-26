# predict.py

import torch
from torchvision import transforms, datasets
from PIL import Image
from model import get_model


device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


train_dataset = datasets.ImageFolder("dataset/train")
classes = train_dataset.classes


model = get_model(len(classes))
model.load_state_dict(torch.load("skin_model.pth", map_location=device))
model.to(device)
model.eval()


transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])
])

def predict_image(image_path):

    image = Image.open(image_path).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        outputs = model(image)
        probabilities = torch.softmax(outputs, dim=1)
        confidence, predicted = torch.max(probabilities, 1)

  
    clean_name = classes[predicted.item()] \
        .replace(" Photos", "") \
        .replace(" Skin Cancer Nevi and Moles", "") \
        .replace(" and Rosacea", "")

    return clean_name, confidence.item()