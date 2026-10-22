
import { useState } from "react";
import "./App.css";

import CitizenDashboard from "./components/CitizenDashboard";

const socialClasses = [
  { name: "Elite", tier: "PLATINUM", range: "90–100", color: "#e6c889", description: "Premium access to society's finest services." },
  { name: "Gold", tier: "UPPER CLASS", range: "80–89", color: "#d6a86a", description: "Priority access and enhanced privileges." },
  { name: "Silver", tier: "MIDDLE CLASS", range: "60–79", color: "#b5c9bb", description: "Balanced access to essential services." },
  { name: "Bronze", tier: "LOWER CLASS", range: "40–59", color: "#bd896b", description: "Basic access with limited privileges." },
  { name: "Restricted", tier: "RESTRICTED", range: "20–39", color: "#a58eaa", description: "Access subject to additional restrictions." },
  { name: "Outcast", tier: "OUTCAST", range: "0–19", color: "#8b9891", description: "Severely limited access to public services." },
];

const steps = [
  { number: "01", title: "Live your life", text: "Everyday actions, activities, and contributions become part of your social record." },
  { number: "02", title: "Your score evolves", text: "The system evaluates recorded activities and updates your Social Score." },
  { number: "03", title: "Access is determined", text: "Your score and social class determine eligibility for essential services." },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  if (showDashboard) {
  return <CitizenDashboard onBack={() => setShowDashboard(false)} />;
 }

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="SocioScore home">
          <span className="brand-symbol">S</span>
          <span>SocioScore<span className="brand-muted"> 2500</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#system" onClick={() => setMenuOpen(false)}>The System</a>
          <a href="#classes" onClick={() => setMenuOpen(false)}>Social Classes</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          
          <button
            className="nav-login"
            onClick={() => {
              setMenuOpen(false);
              setShowDashboard(true);
            }}
          >
            Citizen Access ↗
           </button>

        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> CIVILIZATION REDEFINED · YEAR 2500</div>
            <h1>
              YOUR SCORE.<br />
              <span>YOUR PLACE</span><br />
              IN SOCIETY.
            </h1>
            <p className="hero-description">
              Money is a relic of the past. Your Social Score is your currency.
              Every action shapes your standing. Every point shapes your future.
            </p>
            <div className="hero-actions">
              <a href="#system" className="button button-primary">Explore the System <span>↗</span></a>
              <a href="#how-it-works" className="button button-secondary">Understand Your Score</a>
            </div>
            <div className="hero-footnote">
              <span>◈</span> A fictional society simulation · OOMD Mini Project
            </div>
          </div>

          <div className="score-stage" aria-label="Illustrative citizen social score">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="score-card">
              <div className="score-card-top">
                <span className="eyebrow">CITIZEN PROFILE</span>
                <span className="live-indicator"><span /> SIMULATION</span>
              </div>
              <div className="score-emblem">S<span>+</span></div>
              <p className="score-label">CURRENT SOCIAL SCORE</p>
              <div className="score-number">94<span>/100</span></div>
              <div className="score-meter"><span /></div>
              <div className="score-card-bottom">
                <div>
                  <span className="small-label">SOCIAL CLASS</span>
                  <strong className="elite-label">PLATINUM ELITE</strong>
                </div>
                <span className="class-seal">✦</span>
              </div>
              <div className="score-divider" />
              <div className="score-metrics">
                <div><span>Contribution</span><strong>+12.4</strong></div>
                <div><span>Trust index</span><strong>98.2%</strong></div>
                <div><span>Access level</span><strong>Tier 01</strong></div>
              </div>
              <p className="demo-note">ILLUSTRATIVE DATA — NOT A REAL CITIZEN RECORD</p>
            </div>
            <div className="floating-tag tag-top"><span>✧</span> SYSTEM ONLINE</div>
            <div className="floating-tag tag-bottom"><span>↗</span> FUTURE STATUS: OPTIMAL</div>
          </div>
          <div className="hero-index">SS / 2500 <span>—</span> 001</div>
        </section>

        <section className="principle-strip" id="system">
          <div><span className="strip-icon">◈</span><p>ONE SOCIETY<strong>Zero traditional currency</strong></p></div>
          <div><span className="strip-icon">◎</span><p>ONE MEASURE<strong>Social Score · 0 to 100</strong></p></div>
          <div><span className="strip-icon">⌘</span><p>ONE SYSTEM<strong>Access through eligibility</strong></p></div>
        </section>

        <section className="content-section classes-section" id="classes">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE SOCIAL HIERARCHY</p>
              <h2>Six classes. <span>One number.</span></h2>
              <p className="section-description">Your score determines your place in the social order.</p>
            </div>
            <span className="section-index">01 / CLASSIFICATION</span>
          </div>
          <div className="class-grid">
            {socialClasses.map((item, index) => (
              <article className="class-card" key={item.name} style={{ "--class-color": item.color }}>
                <div className="class-card-top"><span>0{index + 1}</span><span>↗</span></div>
                <div className="class-symbol">{["✦", "◇", "◈", "⬡", "⌁", "∅"][index]}</div>
                <p className="class-tier">{item.tier}</p>
                <h3>{item.name}</h3>
                <div className="class-range">{item.range} <span>SCORE</span></div>
                <p className="class-description">{item.description}</p>
                <div className="class-line" />
              </article>
            ))}
          </div>
          <p className="classification-note">CLASS THRESHOLDS ARE PART OF THIS PROJECT'S FICTIONAL MODEL.</p>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE MECHANISM</p>
              <h2>How the system <span>works.</span></h2>
              <p className="section-description">A society managed through contribution, evaluation, and eligibility.</p>
            </div>
            <span className="section-index">02 / PROCESS</span>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-arrow">↗</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="access-panel" id="access">
            <div>
              <p className="eyebrow">YOUR FUTURE AWAITS</p>
              <h2>Know your place.<br /><span>Question the system.</span></h2>
              <p>This is a fictional simulation built to explore object-oriented modeling, social scoring, and service eligibility.</p>
            </div>
            <a className="button button-primary" href="mailto:">Citizen portal — coming soon <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-symbol">S</span><span>SocioScore<span className="brand-muted"> 2500</span></span></a>
        <p>A fictional future. A question about the present.</p>
        <span className="footer-meta">OOMD MINI PROJECT · 2026</span>
      </footer>
    </div>
  );
}

export default App;
