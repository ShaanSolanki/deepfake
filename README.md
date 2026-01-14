# Deepfake Detection System

A deepfake detection system using MobileNetV2 and MTCNN for face detection.

## Setup

1. Install dependencies:

```bash
pip install -r requirements.txt
```

## Usage

### Step 1: Extract Faces from Videos

```bash
python model/extract_faces.py
```

This will extract faces from videos in `dataset/real` and `dataset/fake` folders and save them to `frames/`.

### Step 2: Train the Model

```bash
python model/train.py
```

This will train the model and save it as `deepfake.h5`.

### Step 3: Run the API Server

```bash
python app.py
```

The server will start on http://localhost:5000

### Step 4: Test Prediction

Send a POST request with a video file:

```bash
curl -X POST -F "video=@path/to/video.mp4" http://localhost:5000/predict
```

## Project Structure

- `app.py` - Flask API server
- `model/extract_faces.py` - Extract faces from videos
- `model/train.py` - Train the deepfake detection model
- `model/predict_video.py` - Predict if a video is real or fake
- `dataset/` - Training videos (real and fake)
- `frames/` - Extracted face images
- `deepfake.h5` - Trained model (generated after training)
