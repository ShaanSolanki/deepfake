const Features = () => {
  const features = [
    {
      title: "AI-Powered Detection",
      description:
        "Advanced MobileNetV2 and MTCNN models for accurate deepfake identification with confidence scoring",
    },
    {
      title: "Real-time Processing",
      description:
        "Instant video analysis with immediate results and comprehensive detection reports",
    },
    {
      title: "Legal Guidance",
      description:
        "Jurisdiction-specific reporting instructions and official cybercrime portal connections",
    },
    {
      title: "Evidence Preservation",
      description:
        "Professional PDF report generation with file hashes for legal documentation",
    },
    {
      title: "Privacy Protection",
      description:
        "Videos processed in memory only - no permanent storage or third-party sharing",
    },
    {
      title: "Organization Mode",
      description:
        "Enterprise incident response protocols with stakeholder notification systems",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Platform Features</h2>
        <p className="section-subtitle">
          Comprehensive deepfake detection with industry-leading accuracy and
          support
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
