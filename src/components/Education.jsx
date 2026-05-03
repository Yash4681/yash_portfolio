import { education } from '../data/portfolio'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" eyebrow="Foundation" title="Education">
      <article className="education-card glass-panel">
        <span>{education.year}</span>
        <h3>{education.degree}</h3>
        <p>{education.institution}</p>
      </article>
    </Section>
  )
}
