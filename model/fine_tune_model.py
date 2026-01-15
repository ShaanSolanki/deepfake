from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Load your old trained model
model = load_model("deepfake_model.h5")

# Prepare data generator for all frames (old + new)
train_datagen = ImageDataGenerator(rescale=1./255, validation_split=0.2)

train_generator = train_datagen.flow_from_directory(
    'frames',          # your frames folder
    target_size=(128, 128),
    batch_size=16,
    class_mode='binary',
    subset='training'
)

val_generator = train_datagen.flow_from_directory(
    'frames',
    target_size=(128, 128),
    batch_size=16,
    class_mode='binary',
    subset='validation'
)

# Fine-tune: train model for few epochs
model.fit(train_generator, validation_data=val_generator, epochs=3)

# Save updated model
model.save("deepfake_model_v2.h5")

print("Fine-tuning complete! Model saved as deepfake_model_v2.h5")
