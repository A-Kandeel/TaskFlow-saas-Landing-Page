import { useState } from "react";
import {
  Sparkles,
  WandSparkles
} from "lucide-react";
import SecHeader from "../secHeader";
import Generated from "./generated";

const Demo = () => {
  const [mode, setmode] = useState("Confident");
  const [showGenerated, setShowGenerated] = useState(false);
  return (
    <section className="demo container" id="Demo">
      <div className="demo-overlay">
        <div className="text">
          <SecHeader
            subtitle="LIVE PRODUCT DEMO"
            title="Give TaskFlow a messy brief. Get a useful first move."
            desc="Change the tone, edit the request, and generate a sample output. 
              This interaction is intentionally simple—but it shows the product idea."
          />
          <div className="btn-box">
            <button
              className={`${mode === "Confident" ? "active" : ""}`}
              onClick={() => setmode("Confident")}
            >
              Confident
            </button>
            <button
              className={`${mode === "Friendly" ? "active" : ""}`}
              onClick={() => setmode("Friendly")}
            >
              Friendly
            </button>
            <button
              className={`${mode === "Executive" ? "active" : ""}`}
              onClick={() => setmode("Executive")}
            >
              Executive
            </button>
          </div>
        </div>
        <div className="AI-Card">
          <span className="desc">YOUR REQUEST</span>
          <textarea rows={4}>
            Create a launch plan for 
            our new AI-powered meeting assistant.
          </textarea>
          <div className="console-bottom">
            <span className="desc"><Sparkles /> Tone: {mode}</span>
            <button onClick={() => setShowGenerated(true)}>
              Generate <WandSparkles />
            </button>
          </div>
          {showGenerated && <Generated />}
        </div>
      </div>
    </section>
  );
}

export default Demo;