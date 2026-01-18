import { useState } from "react";
import VideoUpload from "./VideoUpload";
import AnalysisResult from "./AnalysisResult";
import GuidanceSection from "./GuidanceSection";

const Detection = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [isOrgMode, setIsOrgMode] = useState(false);

  const handleAnalysisComplete = (data) => {
    setAnalysisData(data);
  };

  const handleReset = () => {
    setAnalysisData(null);
  };

  const toggleMode = () => {
    setIsOrgMode(!isOrgMode);
  };

  return (
    <div className="detection-section">
      <div className="detection-header">
        <div className="mode-controls">
          <div className="mode-indicator">
            <span
              className={`mode-badge ${isOrgMode ? "organization" : "individual"}`}
            >
              {isOrgMode ? "Organization Mode" : "Individual Mode"}
            </span>
          </div>
          <button className="mode-toggle" onClick={toggleMode}>
            Switch to {isOrgMode ? "Individual" : "Organization"} Mode
          </button>
        </div>
      </div>

      <VideoUpload onAnalysisComplete={handleAnalysisComplete} />

      {analysisData && (
        <>
          <AnalysisResult analysisData={analysisData} isOrgMode={isOrgMode} />
          <GuidanceSection analysisData={analysisData} isOrgMode={isOrgMode} />
          <div className="reset-section">
            <button className="reset-btn" onClick={handleReset}>
              Analyze Another Video
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Detection;
