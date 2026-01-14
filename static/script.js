let selectedFile = null;

// Get DOM elements
const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("fileInput");
const fileInfo = document.getElementById("fileInfo");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const analyzeBtn = document.getElementById("analyzeBtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const errorDiv = document.getElementById("error");
const errorMessage = document.getElementById("errorMessage");

// Click to upload
uploadArea.addEventListener("click", () => {
  fileInput.click();
});

// File input change
fileInput.addEventListener("change", (e) => {
  handleFile(e.target.files[0]);
});

// Drag and drop
uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.classList.add("dragover");
});

uploadArea.addEventListener("dragleave", () => {
  uploadArea.classList.remove("dragover");
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadArea.classList.remove("dragover");
  handleFile(e.dataTransfer.files[0]);
});

// Handle file selection
function handleFile(file) {
  if (!file) return;

  // Check if file is a video
  if (!file.type.startsWith("video/")) {
    showError("Please select a valid video file");
    return;
  }

  // Check file size (max 100MB)
  if (file.size > 100 * 1024 * 1024) {
    showError("File size must be less than 100MB");
    return;
  }

  selectedFile = file;

  // Display file info
  fileName.textContent = file.name;
  fileSize.textContent = formatFileSize(file.size);
  fileInfo.classList.add("show");
  analyzeBtn.classList.add("show");

  // Hide previous results
  result.classList.remove("show");
  errorDiv.classList.remove("show");
}

// Analyze button click
analyzeBtn.addEventListener("click", async () => {
  if (!selectedFile) return;

  // Show loading
  analyzeBtn.disabled = true;
  loading.classList.add("show");
  result.classList.remove("show");
  errorDiv.classList.remove("show");

  try {
    // Create form data
    const formData = new FormData();
    formData.append("video", selectedFile);

    // Send request
    const response = await fetch("/predict", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Analysis failed");
    }

    // Show result
    displayResult(data.result);
  } catch (error) {
    showError(error.message);
  } finally {
    loading.classList.remove("show");
    analyzeBtn.disabled = false;
  }
});

// Display result
function displayResult(resultText) {
  const resultIcon = document.getElementById("resultIcon");
  const resultTitle = document.getElementById("resultTitle");
  const resultDescription = document.getElementById("resultDescription");

  // Remove previous classes
  result.classList.remove("real", "fake", "unsure");

  if (resultText === "REAL") {
    result.classList.add("real");
    resultIcon.textContent = "✓";
    resultTitle.textContent = "Video is REAL";
    resultDescription.textContent =
      "This video appears to be authentic and not manipulated.";
  } else if (resultText === "FAKE") {
    result.classList.add("fake");
    resultIcon.textContent = "✗";
    resultTitle.textContent = "Video is FAKE";
    resultDescription.textContent =
      "This video appears to be a deepfake or manipulated content.";
  } else {
    result.classList.add("unsure");
    resultIcon.textContent = "?";
    resultTitle.textContent = "Unable to Determine";
    resultDescription.textContent =
      "Could not detect faces or analyze the video properly.";
  }

  result.classList.add("show");
}

// Reset button
function resetAnalysis() {
  selectedFile = null;
  fileInput.value = "";
  fileInfo.classList.remove("show");
  analyzeBtn.classList.remove("show");
  result.classList.remove("show");
  errorDiv.classList.remove("show");
  loading.classList.remove("show");
}

// Show error
function showError(message) {
  errorMessage.textContent = message;
  errorDiv.classList.add("show");
}

// Format file size
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}
