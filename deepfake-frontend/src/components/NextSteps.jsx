const NextSteps = ({ result }) => {
  const getFakeSteps = () => (
    <ol className="step-list">
      <li className="step-item warning">
        <strong>Do NOT forward or share this video</strong>
        <br />
        <small>Sharing deepfakes can contribute to misinformation spread</small>
      </li>
      <li className="step-item">
        <strong>Preserve the original file</strong>
        <br />
        <small>
          Save the video without any modifications for evidence purposes
        </small>
      </li>
      <li className="step-item">
        <strong>Document the source</strong>
        <br />
        <small>Note where you received this video, when, and from whom</small>
      </li>
      <li className="step-item">
        <strong>Capture screenshots</strong>
        <br />
        <small>Take screenshots of suspicious frames or artifacts</small>
      </li>
      <li className="step-item">
        <strong>Verify with the subject</strong>
        <br />
        <small>
          If possible, contact the person depicted to confirm authenticity
        </small>
      </li>
      <li className="step-item">
        <strong>Report to authorities</strong>
        <br />
        <small>
          Use the legal guidance section to file appropriate reports
        </small>
      </li>
      <li className="step-item">
        <strong>Download evidence report</strong>
        <br />
        <small>
          Generate a professional report for legal or organizational use
        </small>
      </li>
    </ol>
  );

  const getRealSteps = () => (
    <div className="authentic-notice">
      <div className="notice-icon">✓</div>
      <div className="notice-content">
        <h3>This video appears authentic</h3>
        <p>
          However, always verify the source and context. If you have concerns
          about the content or its distribution, consider the risk assessment
          section.
        </p>
      </div>
    </div>
  );

  const getUnsureSteps = () => (
    <div className="inconclusive-notice">
      <div className="notice-icon">⚠</div>
      <div className="notice-content">
        <h3>Analysis Inconclusive</h3>
        <p>
          The system could not confidently determine if this video is real or
          fake. This may be due to poor video quality, lack of clear faces, or
          technical limitations. Consider seeking expert analysis if this video
          is of concern.
        </p>
      </div>
    </div>
  );

  return (
    <div className="next-steps">
      <h3>What Should You Do Next?</h3>
      {result === "FAKE" && getFakeSteps()}
      {result === "REAL" && getRealSteps()}
      {result !== "FAKE" && result !== "REAL" && getUnsureSteps()}
    </div>
  );
};

export default NextSteps;
