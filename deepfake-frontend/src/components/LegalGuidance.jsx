import { useState, useEffect } from "react";

const LegalGuidance = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN");

  const legalGuidance = {
    IN: {
      title: "India - Legal Reporting Guidance",
      content: (
        <>
          <h4>Official Reporting Channels</h4>
          <ul>
            <li>Report to National Cybercrime Reporting Portal</li>
            <li>File FIR at local Cyber Crime Police Station</li>
            <li>Contact State Cyber Cell for assistance</li>
            <li>Report under IT Act 2000 (Section 66D for impersonation)</li>
            <li>Consider IPC Section 500 (Defamation) if applicable</li>
          </ul>
          <h4>Evidence Requirements</h4>
          <ul>
            <li>Original video file with metadata intact</li>
            <li>Screenshots of distribution channels</li>
            <li>Details of source and distribution timeline</li>
            <li>Any communication related to the video</li>
          </ul>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            Visit Cybercrime Portal →
          </a>
        </>
      ),
    },
    US: {
      title: "United States - Legal Reporting Guidance",
      content: (
        <>
          <h4>Official Reporting Channels</h4>
          <ul>
            <li>Report to FBI Internet Crime Complaint Center (IC3)</li>
            <li>Contact local law enforcement</li>
            <li>File complaint with FTC for fraud cases</li>
            <li>Consider state-specific deepfake laws</li>
            <li>Consult attorney for civil remedies</li>
          </ul>
          <a
            href="https://www.ic3.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            Visit IC3 Portal →
          </a>
        </>
      ),
    },
    UK: {
      title: "United Kingdom - Legal Reporting Guidance",
      content: (
        <>
          <h4>Official Reporting Channels</h4>
          <ul>
            <li>Report to Action Fraud (UK's cybercrime reporting center)</li>
            <li>Contact local police for serious cases</li>
            <li>Report under Computer Misuse Act 1990</li>
            <li>Consider Malicious Communications Act 1988</li>
            <li>Seek legal advice for defamation claims</li>
          </ul>
          <a
            href="https://www.actionfraud.police.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            Visit Action Fraud →
          </a>
        </>
      ),
    },
    EU: {
      title: "European Union - Legal Reporting Guidance",
      content: (
        <>
          <h4>Official Reporting Channels</h4>
          <ul>
            <li>Report to national cybercrime authorities</li>
            <li>Contact Europol for cross-border cases</li>
            <li>Invoke GDPR rights for personal data misuse</li>
            <li>Report to Digital Services Act authorities</li>
            <li>Seek legal counsel in your jurisdiction</li>
          </ul>
          <a
            href="https://www.europol.europa.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            Visit Europol →
          </a>
        </>
      ),
    },
    AU: {
      title: "Australia - Legal Reporting Guidance",
      content: (
        <>
          <h4>Official Reporting Channels</h4>
          <ul>
            <li>Report to Australian Cyber Security Centre (ACSC)</li>
            <li>Contact ReportCyber for cybercrime</li>
            <li>File complaint with eSafety Commissioner</li>
            <li>Contact local police for serious matters</li>
            <li>Consider Criminal Code Act provisions</li>
          </ul>
          <a
            href="https://www.cyber.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="legal-link"
          >
            Visit ACSC →
          </a>
        </>
      ),
    },
    OTHER: {
      title: "General Legal Guidance",
      content: (
        <>
          <h4>Recommended Actions</h4>
          <ul>
            <li>Contact local law enforcement cybercrime division</li>
            <li>Consult with a legal professional in your jurisdiction</li>
            <li>Document all evidence thoroughly</li>
            <li>Report to relevant social media platforms</li>
            <li>Seek guidance from consumer protection agencies</li>
          </ul>
        </>
      ),
    },
  };

  // Auto-detect country based on timezone
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes("Kolkata") || timezone.includes("India")) {
      setSelectedCountry("IN");
    }
  }, []);

  const currentGuidance = legalGuidance[selectedCountry] || legalGuidance.OTHER;

  return (
    <div className="legal-guidance">
      <h3>Report & Legal Guidance</h3>

      <div className="country-selector">
        <label htmlFor="country-select">Your Jurisdiction:</label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="IN">India</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="EU">European Union</option>
          <option value="AU">Australia</option>
          <option value="OTHER">Other</option>
        </select>
      </div>

      <div className="legal-content">
        <h4>{currentGuidance.title}</h4>
        {currentGuidance.content}
      </div>
    </div>
  );
};

export default LegalGuidance;
