import { achievements, competencies, profile } from '../data/portfolio'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="Profile" title="About Me">
      <div className="about-grid">
        <div className="glass-panel about-copy">
          <p>{profile.summary}</p>
          <p>
            I bring together backend engineering, responsive front-end development, data performance,
            and automated quality practices to deliver business-critical features in Agile environments.
          </p>
        </div>
        <div className="competency-panel">
          {competencies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="achievement-strip" aria-label="Key achievements">
        {achievements.map((achievement) => (
          <article key={achievement}>
            <p>{achievement}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
