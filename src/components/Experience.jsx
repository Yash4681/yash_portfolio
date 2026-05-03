import { experiences } from '../data/portfolio'
import { Icon } from './Icon'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience Timeline">
      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-item" key={`${experience.company}-${experience.period}`}>
            <div className="timeline-marker">
              <Icon name="briefcase" />
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>
                <span>{experience.period}</span>
              </div>
              <p>{experience.summary}</p>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
