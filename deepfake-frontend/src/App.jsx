import FaultyTerminal from "./FaultyTerminal";
import "./App.css";

function App() {
  return (
    <FaultyTerminal
      scale={1.5}
      gridMul={[2, 1]}
      digitSize={1.2}
      timeScale={1}
      pause={false}
      scanlineIntensity={1}
      glitchAmount={1}
      flickerAmount={1}
      noiseAmp={0.5}
      chromaticAberration={0}
      dither={0}
      curvature={0.3}
      tint="#00ff00"
      mouseReact={true}
      mouseStrength={0.5}
      pageLoadAnimation={false}
      brightness={0.6}
    />
  );
}

export default App;
