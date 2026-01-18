import { useState, useEffect } from "react";

const RiskAssessment = () => {
  const [answers, setAnswers] = useState({
    q1: false, // impersonation
    q2: false, // financial fraud
    q3: false, // public distribution
    q4: false, // reputation damage
  });
  const [riskLevel, setRiskLevel] = useState(null);

  const questions = [
    {
      id: "q1",
      text: "Does this video impersonate you or someone you know?",
    },
    {
      id: "q2",
      text: "Is there potential for financial fraud or scam?",
    },
    {
      id: "q3",
      text: "Has this video been publicly shared or distributed?",
    },
    {
      id: "q4",
      text: "Could this damage reputation or cause harm?",
    },
  ];

  const handleAnswerChange = (questionId, checked) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: checked,
    }));
  };

  useEffect(() => {
    const checkedCount = Object.values(answers).filter(Boolean).length;

    if (checkedCount === 0) {
      setRiskLevel(null);
    } else if (checkedCount === 1) {
      setRiskLevel("low");
    } else if (checkedCount === 2 || checkedCount === 3) {
      setRiskLevel("medium");
    } else {
      setRiskLevel("high");
    }
  }, [answers]);

  const getRiskDisplay = () => {
    switch (riskLevel) {
      case "low":
        return {
          icon: "🟢",
          title: "Low Risk",
          description:
            "Monitor the situation. Consider reporting to the platform where it was shared.",
          action: "Recommended Action: Platform reporting, awareness",
        };
      case "medium":
        return {
          icon: "🟡",
          title: "Medium Risk",
          description:
            "Take action promptly. Report to authorities and platforms.",
          action:
            "Recommended Action: Legal reporting, platform reporting, inform affected parties",
        };
      case "high":
        return {
          icon: "🔴",
          title: "High Risk",
          description:
            "Urgent action required. Contact law enforcement, legal counsel, and IT security immediately.",
          action:
            "Recommended Action: Immediate legal action, cybercrime reporting, crisis management",
        };
      default:
        return null;
    }
  };

  const riskDisplay = getRiskDisplay();

  return (
    <div className="risk-assessment">
      <h3>Risk & Impact Assessment</h3>
      <p className="assessment-description">
        Answer these questions to determine the appropriate response level:
      </p>

      <div className="risk-questions">
        {questions.map((question) => (
          <label key={question.id} className="question-item">
            <input
              type="checkbox"
              checked={answers[question.id]}
              onChange={(e) =>
                handleAnswerChange(question.id, e.target.checked)
              }
            />
            <span className="question-text">{question.text}</span>
          </label>
        ))}
      </div>

      {riskDisplay && (
        <div className={`risk-result ${riskLevel}`}>
          <div className="risk-icon">{riskDisplay.icon}</div>
          <div className="risk-content">
            <h4 className="risk-title">{riskDisplay.title}</h4>
            <p className="risk-description">{riskDisplay.description}</p>
            <p className="risk-action">
              <strong>{riskDisplay.action}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiskAssessment;
