const Trust = () => {
  return (
    <section className="trust">
      <div className="container">
        <h2 className="section-title">Responsible AI Detection</h2>
        <div className="trust-content">
          <div className="trust-item">
            <h3 className="trust-subtitle">Probabilistic Analysis</h3>
            <p className="trust-text">
              Our AI provides confidence scores, not absolute certainty. Results
              should be used as guidance alongside human judgment and additional
              verification methods.
            </p>
          </div>

          <div className="trust-item">
            <h3 className="trust-subtitle">Privacy First</h3>
            <p className="trust-text">
              Videos are processed locally and deleted immediately after
              analysis. No data is stored permanently or shared with third
              parties.
            </p>
          </div>

          <div className="trust-item">
            <h3 className="trust-subtitle">Ethical Usage</h3>
            <p className="trust-text">
              This platform is designed for protection and education. We provide
              clear guidance on responsible use and legal reporting channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
