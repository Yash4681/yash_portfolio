import { skillGroups } from '../data/portfolio'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Technical Skills">
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title} style={{ '--delay': `${index * 70}ms` }}>
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
