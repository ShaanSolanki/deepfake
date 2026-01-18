import { useState } from "react";

const AnalysisResult = ({ analysisData, isOrgMode }) => {
  const { result, confidence, file, fileHash, timestamp } = analysisData;

  const getResultDisplay = () => {
    if (result === "REAL") {
      return {
        icon: "✓",
        title: "Video is REAL",
        description: "This video appears to be authentic and not manipulated.",
        className: "real",
      };
    } else if (result === "FAKE") {
      return {
        icon: "✗",
        title: "Video is FAKE",
        description:
          "This video appears to be a deepfake or manipulated content.",
        className: "fake",
      };
    } else {
      return {
        icon: "?",
        title: "Unable to Determine",
        description: "Could not detect faces or analyze the video properly.",
        className: "unsure",
      };
    }
  };

  const resultDisplay = getResultDisplay();

  return (
    <div className={`analysis-result ${resultDisplay.className}`}>
      <div className="result-header">
        <div className="result-icon">{resultDisplay.icon}</div>
        <div className="result-content">
          <h2 className="result-title">{resultDisplay.title}</h2>
          <p className="result-description">{resultDisplay.description}</p>
        </div>
      </div>

      <div className="confidence-section">
        <div className="confidence-label">Confidence Level</div>
        <div className="confidence-bar">
          <div
            className="confidence-fill"
            style={{ width: `${confidence}%` }}
          ></div>
        </div>
        <div className="confidence-value">{confidence}%</div>
      </div>

      <div className="analysis-metadata">
        <div className="metadata-item">
          <strong>File:</strong> {file.name}
        </div>
        <div className="metadata-item">
          <strong>Size:</strong> {(file.size / (1024 * 1024)).toFixed(2)} MB
        </div>
        <div className="metadata-item">
          <strong>Analyzed:</strong> {timestamp.toLocaleString()}
        </div>
        <div className="metadata-item">
          <strong>Hash:</strong> {fileHash.substring(0, 16)}...
        </div>
        {isOrgMode && (
          <div className="metadata-item">
            <strong>Mode:</strong> Organization Analysis
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisResult;
