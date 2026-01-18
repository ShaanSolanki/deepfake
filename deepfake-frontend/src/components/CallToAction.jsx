import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Detect Deepfakes?</h2>
          <p className="cta-subtitle">
            Upload your video and get instant AI-powered analysis with
            comprehensive guidance
          </p>
          <Link to="/detection" className="btn-primary btn-large">
            Start Detection Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
