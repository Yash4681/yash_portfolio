import { projects } from '../data/portfolio'
import { Icon } from './Icon'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects Showcase">
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <a target='blank' href={project.link}>
            <div className="project-icon">
              <Icon name="code" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list compact">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <ul>
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
