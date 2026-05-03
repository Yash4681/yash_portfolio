import heroImage from '../assets/hero.png'
import { metrics, profile } from '../data/portfolio'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <span className="status-pill">
          <span aria-hidden="true" />
          Available for frontend and full-stack roles
        </span>
        <br/>
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href={profile.resume} download>
            <Icon name="download" />
            Download Resume
          </a>
          <a className="button secondary" href="#projects">
            View Projects
            <Icon name="arrow" />
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portfolio highlights">
        <div className="orbital-card">
          <img src={heroImage} alt="" aria-hidden="true" />
          <div>
            <span>Enterprise Web Apps</span>
            <strong>ASP.NET Core + React</strong>
          </div>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
