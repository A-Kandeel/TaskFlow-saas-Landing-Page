import Button from "./button";
import {Sparkles} from "lucide-react";

const Hero = () => {
  return (
    <div className="hero container" id="Hero">
      <section className="text">
        <p className="eye-brrow"><span></span>Organize Projects Faster With AI</p>
        <h1 className="sec-title">Turn messy work into <span>clear momentum.</span></h1>
        <p className="desc main-p">
          TaskFlow helps startups manage projects, 
          automate tasks and collaborate in one workspace 
          —so your team spends less time prompting and more time moving.
        </p>
        <div className="btn-box">
          <Button onClick={() => window.location.href ="#Contact"}>Start Building For Free</Button>
          <span className="play">
            <span href="#Demo" onClick={() => window.location.href ="#Demo"}>
              <i className="fas fa-play"></i>
            </span>
            See how it works
          </span>
        </div>
        <div className="proof-box">
          <div className="avatars">
            <span className="person-ico">MH</span>
            <span className="person-ico">DR</span>
            <span className="person-ico">OK</span>
            <span className="person-ico">+</span>
          </div>
          <div className="text-box">
            <strong>2,000+ teams</strong>
            <p className="desc">building faster with AI</p>
          </div>
        </div>
      </section>
      <section className="visual">
        <div className="ai-card">
          <div className="card-top">
            <div className="text">
              <p className="desc">TaskFlow workspace</p>
              <h3 className="header">Lunch Workspace</h3>
            </div>
              <span className="dot">Live</span>
          </div>
          <div className="prompt-row">
            <div className="icon"><Sparkles /></div>
            <div className="text">
              <span className="desc">YOUR BRIEF</span>
              <p>
                Launch the meeting assistant in 3 weeks. 
                Need positioning, beta invite, and launch checklist.
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="progress">
            <span className="person-ico">AI</span>
            <div className="box">
              <h4 className="title">TaskFlow built a focused plan</h4>
              <div className="progress-line">
                <span></span>
              </div>
            </div>
            <span className="percntage">82%</span>
          </div>
          <div className="cards-holder">
            <div className="card">
              <span>01</span>
              <h3 className="title">Positioning</h3>
              <p className="desc">Define the one-sentence value promise.</p>
            </div>
            <div className="card">
              <span>02</span>
              <h3 className="title">Beta</h3>
              <p className="desc">Recruit 30 design partners.</p>
            </div>
            <div className="card">
              <span>03</span>
              <h3 className="title">Launch</h3>
              <p className="desc">Build assets and channel sequence.</p>
            </div>
          </div>
          <div className="card-bottom">
            <div className="box">
              <i className="far fa-clock"></i>
              <span>Generated in 4.2s</span>
            </div>
            <Button onClick={() => window.location.href ="#Demo"}>Try the workflow</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;