const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Video",
      description: "Drag and drop or select your video file for analysis",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our MobileNetV2 model analyzes frames for deepfake indicators",
    },
    {
      number: "03",
      title: "Get Results",
      description: "Receive confidence scores and detailed detection report",
    },
    {
      number: "04",
      title: "Take Action",
      description:
        "Follow guided steps for reporting and evidence preservation",
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Simple, secure, and accurate deepfake detection in four steps
        </p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
