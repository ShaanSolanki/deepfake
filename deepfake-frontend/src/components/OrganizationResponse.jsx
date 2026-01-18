import { useState } from "react";

const OrganizationResponse = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const checklistItems = [
    {
      id: "preserve",
      text: "Preserve all evidence (original file, metadata, screenshots)",
    },
    {
      id: "it-security",
      text: "Notify IT Security team immediately",
    },
    {
      id: "legal",
      text: "Inform Legal/Compliance department",
    },
    {
      id: "pr",
      text: "Alert PR/Communications team if public-facing",
    },
    {
      id: "access",
      text: "Restrict sensitive system access if identity compromise suspected",
    },
    {
      id: "document",
      text: "Document incident timeline and impact assessment",
    },
    {
      id: "clarification",
      text: "Consider public clarification if widely circulated",
    },
    {
      id: "protocols",
      text: "Review and update security protocols",
    },
  ];

  const handleCheckChange = (itemId, checked) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: checked,
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = checklistItems.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <div className="organization-response">
      <h3>Internal Response Checklist</h3>
      <p className="org-description">
        Follow this enterprise incident response protocol for deepfake
        incidents:
      </p>

      <div className="progress-section">
        <div className="progress-header">
          <span>
            Progress: {completedCount}/{totalCount} completed
          </span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="checklist">
        {checklistItems.map((item) => (
          <label key={item.id} className="checklist-item">
            <input
              type="checkbox"
              checked={checkedItems[item.id] || false}
              onChange={(e) => handleCheckChange(item.id, e.target.checked)}
            />
            <span className="checkmark"></span>
            <span className="checklist-text">{item.text}</span>
          </label>
        ))}
      </div>

      <div className="org-notes">
        <h4>Additional Considerations</h4>
        <ul>
          <li>
            Establish a crisis communication plan if the incident becomes public
          </li>
          <li>
            Consider engaging external cybersecurity experts for forensic
            analysis
          </li>
          <li>Review employee training on deepfake awareness and detection</li>
          <li>Update incident response procedures based on lessons learned</li>
        </ul>
      </div>
    </div>
  );
};

export default OrganizationResponse;
