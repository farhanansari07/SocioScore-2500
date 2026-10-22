
import { useState } from "react";

const navigation = [
  { id: "overview", icon: "◫", label: "Overview" },
  { id: "activities", icon: "↗", label: "Activity History" },
  { id: "services", icon: "◇", label: "Public Services" },
  { id: "appeals", icon: "⌁", label: "Appeals" },
  { id: "notifications", icon: "◉", label: "Notifications" },
];

const activities = [
  { title: "Community garden initiative", category: "Community", date: "23 OCT 2500", change: "+2.0", positive: true },
  { title: "Public knowledge contribution", category: "Education", date: "21 OCT 2500", change: "+1.5", positive: true },
  { title: "Civic participation review", category: "Civic duty", date: "18 OCT 2500", change: "+0.5", positive: true },
  { title: "Quarterly score assessment", category: "Evaluation", date: "15 OCT 2500", change: "Reviewed", positive: false },
];

const services = [
  { icon: "✚", name: "Healthcare", level: "Priority access", detail: "Preventive and general healthcare services", status: "Eligible", color: "sage" },
  { icon: "⌂", name: "Housing", level: "Standard allocation", detail: "Residential allocation and housing support", status: "Eligible", color: "amber" },
  { icon: "▤", name: "Education", level: "Advanced access", detail: "Learning programmes and public institutions", status: "Eligible", color: "sage" },
  { icon: "⇄", name: "Transport", level: "Enhanced mobility", detail: "Public transit and mobility services", status: "Eligible", color: "amber" },
];

function CitizenDashboard({ onBack }) {
  const [activePage, setActivePage] = useState("overview");
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const pageTitles = {
    overview: ["Citizen overview", "Your social standing at a glance."],
    activities: ["Activity history", "Review the events recorded in your social profile."],
    services: ["Public services", "Explore services available in this demonstration."],
    appeals: ["Appeals centre", "Review or prepare a challenge to a score decision."],
    notifications: ["Notifications", "Updates from the fictional SocioScore system."],
  };

  function navigate(page) {
    setActivePage(page);
    setMobileSidebar(false);
  }

  function renderContent() {
    if (activePage === "activities") {
      return (
        <section className="dash-panel">
          <div className="dash-panel-heading">
            <div>
              <p className="eyebrow">YOUR RECORD</p>
              <h2>Recent activities</h2>
            </div>
            <span className="dash-count">04 RECORDS</span>
          </div>
          <ActivityList />
        </section>
      );
    }

    if (activePage === "services") {
      return (
        <section className="dash-panel">
          <div className="dash-panel-heading">
            <div>
              <p className="eyebrow">ACCESS DIRECTORY</p>
              <h2>Service eligibility</h2>
              <p className="dash-muted">Illustrative access for a sample score of 94.</p>
            </div>
          </div>
          <ServiceGrid />
          <p className="dash-disclaimer">DEMO POLICY ONLY · REAL ELIGIBILITY RULES HAVE NOT BEEN IMPLEMENTED.</p>
        </section>
      );
    }

    if (activePage === "appeals") {
      return (
        <section className="dash-panel">
          <p className="eyebrow">CITIZEN RIGHTS</p>
          <h2>Appeals centre</h2>
          <p className="dash-muted">In a fair implementation of this fictional system, citizens should be able to challenge incorrect records and score decisions.</p>
          <div className="dash-empty-state">
            <span>⌁</span>
            <h3>No active appeals</h3>
            <p>This demonstration has no submitted appeals yet.</p>
            <button className="dash-button" onClick={() => window.alert("Demo only: the appeals submission form will be implemented in a later step.")}>
              Explore appeal process ↗
            </button>
          </div>
        </section>
      );
    }

    if (activePage === "notifications") {
      return (
        <section className="dash-panel">
          <p className="eyebrow">SYSTEM MESSAGES</p>
          <h2>Notifications</h2>
          <div className="dash-notification">
            <span className="dash-notification-icon">◈</span>
            <div>
              <strong>Citizen profile accessed</strong>
              <p>You are viewing the SocioScore 2500 demonstration dashboard.</p>
              <small>JUST NOW · DEMO EVENT</small>
            </div>
          </div>
          <div className="dash-notification">
            <span className="dash-notification-icon">◎</span>
            <div>
              <strong>Score assessment available</strong>
              <p>The sample activity history is ready for review.</p>
              <small>DEMO NOTIFICATION</small>
            </div>
          </div>
        </section>
      );
    }

    return (
      <>
        <section className="dash-welcome">
          <div>
            <p className="eyebrow">CITIZEN IDENTIFICATION · DEMO-001</p>
            <h2>Welcome to your <span>future.</span></h2>
            <p>This is a sample citizen profile. Your real score will be connected to your account later.</p>
          </div>
          <div className="dash-class-badge">
            <span>✦</span>
            <div>
              <small>CURRENT CLASS</small>
              <strong>PLATINUM ELITE</strong>
            </div>
          </div>
        </section>

        <section className="dash-stat-grid">
          <article className="dash-stat-card dash-score-card">
            <div className="dash-stat-top"><span>SOCIAL SCORE</span><span>◈</span></div>
            <div className="dash-big-number">94<span>/100</span></div>
            <div className="dash-progress"><span /></div>
            <p>Illustrative score · not a real citizen record</p>
          </article>
          <article className="dash-stat-card">
            <div className="dash-stat-top"><span>CLASS RANK</span><span>◇</span></div>
            <div className="dash-stat-value">01<span> / 06</span></div>
            <p>Highest social class in this model</p>
          </article>
          <article className="dash-stat-card">
            <div className="dash-stat-top"><span>RECORDED ACTIVITIES</span><span>↗</span></div>
            <div className="dash-stat-value">12</div>
            <p>Sample contribution records</p>
          </article>
          <article className="dash-stat-card">
            <div className="dash-stat-top"><span>AVAILABLE SERVICES</span><span>⌂</span></div>
            <div className="dash-stat-value">04</div>
            <p>Illustrative service categories</p>
          </article>
        </section>

        <section className="dash-panel">
          <div className="dash-panel-heading">
            <div>
              <p className="eyebrow">LATEST RECORDS</p>
              <h2>Recent activity</h2>
            </div>
            <button className="dash-text-button" onClick={() => navigate("activities")}>View all ↗</button>
          </div>
          <ActivityList compact />
        </section>

        <section className="dash-panel">
          <div className="dash-panel-heading">
            <div>
              <p className="eyebrow">ACCESS DIRECTORY</p>
              <h2>Your public services</h2>
            </div>
            <button className="dash-text-button" onClick={() => navigate("services")}>View all ↗</button>
          </div>
          <ServiceGrid compact />
        </section>
      </>
    );
  }

  return (
    <div className="citizen-app">
      {mobileSidebar && (
        <button
          className="dash-sidebar-backdrop"
          aria-label="Close navigation"
          onClick={() => setMobileSidebar(false)}
        />
      )}

      <aside className={`dash-sidebar ${mobileSidebar ? "dash-sidebar-open" : ""}`}>
        <a className="brand dash-brand" href="#dashboard" onClick={(event) => { event.preventDefault(); navigate("overview"); }}>
          <span className="brand-symbol">S</span>
          <span>SocioScore<span className="brand-muted"> 2500</span></span>
        </a>

        <div className="dash-demo-label"><span /> DEMONSTRATION MODE</div>

        <p className="dash-nav-label">CITIZEN PORTAL</p>
        <nav className="dash-navigation" aria-label="Citizen dashboard">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`dash-nav-item ${activePage === item.id ? "active" : ""}`}
              onClick={() => navigate(item.id)}
            >
              <span className="dash-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.id === "notifications" && <span className="dash-nav-dot" />}
            </button>
          ))}
        </nav>

        <div className="dash-sidebar-bottom">
          <div className="dash-help-card">
            <span>◈</span>
            <strong>Your rights matter.</strong>
            <p>Score decisions should be transparent and appealable.</p>
            <button onClick={() => navigate("appeals")}>Appeals centre ↗</button>
          </div>
          <button className="dash-back-home" onClick={onBack}>← Back to home</button>
          <div className="dash-user-mini">
            <div className="dash-avatar">D</div>
            <div><strong>Demo Citizen</strong><small>Sample profile</small></div>
            <span className="dash-user-menu">⋯</span>
          </div>
        </div>
      </aside>

      <main className="dash-main">
        <header className="dash-topbar">
          <button className="dash-mobile-menu" onClick={() => setMobileSidebar(true)} aria-label="Open navigation">☰</button>
          <div className="dash-breadcrumb">CITIZEN PORTAL <span>/</span> {activePage.toUpperCase()}</div>
          <div className="dash-topbar-right">
            <span className="dash-online"><span /> SYSTEM ONLINE</span>
            <span className="dash-top-avatar">D</span>
          </div>
        </header>

        <div className="dash-content">
          <div className="dash-page-heading">
            <div>
              <p className="eyebrow">SOCIAL ORDER MANAGEMENT SYSTEM</p>
              <h1>{pageTitles[activePage][0]}</h1>
              <p>{pageTitles[activePage][1]}</p>
            </div>
            <span className="dash-date">YEAR 2500 <span>·</span> DEMO</span>
          </div>

          <div className="dash-demo-warning">
            <span>ⓘ</span>
            <p><strong>Demo environment.</strong> All scores, activities, and eligibility statuses are fictional sample data. No real citizen account or government system is connected.</p>
          </div>

          {renderContent()}

          <footer className="dash-footer">
            <span>SOCIOSCORE 2500</span>
            <span>A fictional future. A question about the present.</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

function ActivityList({ compact = false }) {
  const items = compact ? activities.slice(0, 3) : activities;

  return (
    <div className="dash-activity-list">
      {items.map((activity, index) => (
        <div className="dash-activity-row" key={activity.title}>
          <span className={`dash-activity-symbol symbol-${index}`}>{["✧", "▤", "◎", "◈"][index]}</span>
          <div className="dash-activity-details">
            <strong>{activity.title}</strong>
            <span>{activity.category} <span>·</span> {activity.date}</span>
          </div>
          <span className={`dash-activity-change ${activity.positive ? "positive" : ""}`}>{activity.change}</span>
        </div>
      ))}
    </div>
  );
}

function ServiceGrid({ compact = false }) {
  const items = compact ? services.slice(0, 4) : services;

  return (
    <div className="dash-service-grid">
      {items.map((service) => (
        <article className="dash-service-card" key={service.name}>
          <div className={`dash-service-icon ${service.color}`}>{service.icon}</div>
          <div className="dash-service-heading">
            <h3>{service.name}</h3>
            <span className="dash-eligible">{service.status}</span>
          </div>
          <strong className="dash-service-level">{service.level}</strong>
          <p>{service.detail}</p>
          <span className="dash-service-demo">SAMPLE ELIGIBILITY</span>
        </article>
      ))}
    </div>
  );
}

export default CitizenDashboard;
