# model.py

import torch.nn as nn
from torchvision.models import mobilenet_v2, MobileNet_V2_Weights

def get_model(num_classes):
    model = mobilenet_v2(weights=MobileNet_V2_Weights.DEFAULT)

    # Freeze base layers
    for param in model.parameters():
        param.requires_grad = False

    # Replace classifier
    model.classifier[1] = nn.Linear(model.last_channel, num_classes)

    return model