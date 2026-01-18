import { useState } from "react";
import NextSteps from "./NextSteps";
import RiskAssessment from "./RiskAssessment";
import LegalGuidance from "./LegalGuidance";
import PlatformReporting from "./PlatformReporting";
import OrganizationResponse from "./OrganizationResponse";
import EvidenceReport from "./EvidenceReport";

const GuidanceSection = ({ analysisData, isOrgMode }) => {
  const [activeTab, setActiveTab] = useState("steps");

  const tabs = [
    { id: "steps", label: "Next Steps", icon: "📋" },
    { id: "risk", label: "Risk Assessment", icon: "⚠️" },
    { id: "legal", label: "Legal Guidance", icon: "⚖️" },
    { id: "platforms", label: "Platform Reporting", icon: "📱" },
    ...(isOrgMode
      ? [{ id: "organization", label: "Organization Response", icon: "🏢" }]
      : []),
    { id: "evidence", label: "Evidence Report", icon: "📄" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "steps":
        return <NextSteps result={analysisData.result} />;
      case "risk":
        return <RiskAssessment />;
      case "legal":
        return <LegalGuidance />;
      case "platforms":
        return <PlatformReporting />;
      case "organization":
        return <OrganizationResponse />;
      case "evidence":
        return (
          <EvidenceReport analysisData={analysisData} isOrgMode={isOrgMode} />
        );
      default:
        return <NextSteps result={analysisData.result} />;
    }
  };

  return (
    <div className="guidance-section">
      <div className="guidance-header">
        <h2>Post-Detection Guidance</h2>
        <p>
          Follow these steps to respond appropriately to the analysis results
        </p>
      </div>

      <div className="guidance-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="guidance-content">{renderTabContent()}</div>
    </div>
  );
};

export default GuidanceSection;
