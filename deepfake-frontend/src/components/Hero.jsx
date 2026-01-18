import { Link } from "react-router-dom";
import LetterGlitch from "./LetterGlitch";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Advanced Deepfake Detection Platform</h1>
        <p className="hero-subtitle">
          AI-powered video analysis with comprehensive post-detection guidance
          and legal support
        </p>
        <div className="hero-actions">
          <Link to="/detection" className="btn-primary">
            Upload Video
          </Link>
          <button
            className="btn-secondary"
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
