import { useState } from "react";

const PlatformReporting = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const platforms = [
    { id: "whatsapp", name: "WhatsApp", icon: "💬" },
    { id: "instagram", name: "Instagram", icon: "📷" },
    { id: "facebook", name: "Facebook", icon: "👥" },
    { id: "youtube", name: "YouTube", icon: "📺" },
    { id: "linkedin", name: "LinkedIn", icon: "💼" },
    { id: "twitter", name: "Twitter/X", icon: "🐦" },
  ];

  const platformGuides = {
    whatsapp: {
      title: "WhatsApp Reporting",
      steps: [
        "Open the chat containing the deepfake video",
        "Long press on the message",
        'Tap "Report" from the menu',
        'Select "Report and Block" if from unknown sender',
        "Optionally, forward to WhatsApp at +1 (650) 735-0000",
        "Delete the message from your chat",
      ],
    },
    instagram: {
      title: "Instagram Reporting",
      steps: [
        "Tap the three dots (•••) on the post",
        'Select "Report"',
        'Choose "False Information"',
        'Select "Manipulated photo or video"',
        "Follow the on-screen instructions",
        "Block the account if necessary",
      ],
    },
    facebook: {
      title: "Facebook Reporting",
      steps: [
        "Click the three dots (•••) on the post",
        'Select "Find support or report post"',
        'Choose "False information"',
        'Select "Altered photo or video"',
        "Submit the report",
        "Consider blocking the poster",
      ],
    },
    youtube: {
      title: "YouTube Reporting",
      steps: [
        "Click the three dots (⋮) below the video",
        'Select "Report"',
        'Choose "Spam or misleading"',
        'Select "Misleading thumbnail" or "Scams/fraud"',
        "Provide additional details",
        "Submit the report",
      ],
    },
    linkedin: {
      title: "LinkedIn Reporting",
      steps: [
        "Click the three dots (•••) on the post",
        'Select "Report"',
        'Choose "False or misleading"',
        "Select appropriate sub-category",
        "Provide context if requested",
        "Submit the report",
      ],
    },
    twitter: {
      title: "Twitter/X Reporting",
      steps: [
        "Click the three dots (•••) on the tweet",
        'Select "Report Tweet"',
        'Choose "It\'s misleading"',
        'Select "Manipulated media"',
        "Follow additional prompts",
        "Submit the report",
      ],
    },
  };

  const handlePlatformSelect = (platformId) => {
    setSelectedPlatform(platformId);
  };

  return (
    <div className="platform-reporting">
      <h3>Platform-Specific Reporting</h3>
      <p className="platform-description">
        Select a platform to see detailed reporting instructions:
      </p>

      <div className="platform-buttons">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            className={`platform-btn ${selectedPlatform === platform.id ? "active" : ""}`}
            onClick={() => handlePlatformSelect(platform.id)}
          >
            <span className="platform-icon">{platform.icon}</span>
            <span className="platform-name">{platform.name}</span>
          </button>
        ))}
      </div>

      {selectedPlatform && platformGuides[selectedPlatform] && (
        <div className="platform-guide">
          <h4>{platformGuides[selectedPlatform].title}</h4>
          <ol className="guide-steps">
            {platformGuides[selectedPlatform].steps.map((step, index) => (
              <li key={index} className="guide-step">
                {step}
              </li>
            ))}
          </ol>
          <p className="guide-note">
            <strong>Note:</strong> Platform policies and reporting procedures
            may change. Always check the platform's official help center for the
            most current information.
          </p>
        </div>
      )}
    </div>
  );
};

export default PlatformReporting;
