import Detection from "../components/Detection";
import LetterGlitch from "../components/LetterGlitch";

const DetectionPage = () => {
  return (
    <div className="page-container detection-page">
      {/* Hero Section */}
      <section className="detection-hero">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
        <div className="container">
          <div className="detection-hero-content">
            <h1 className="detection-hero-title">Deepfake Detection</h1>
            <p className="detection-hero-subtitle">
              Upload and analyze videos using advanced AI technology. Get instant results with comprehensive guidance and legal support.
            </p>
          </div>
        </div>
      </section>

      {/* Detection Content */}
      <section className="page-content">
        <div className="container">
          <Detection />
        </div>
      </section>
    </div>
  );
};

export default DetectionPage;
