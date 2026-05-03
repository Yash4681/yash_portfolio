import { profile } from '../data/portfolio'
import { Icon } from './Icon'
import { Section } from './Section'

const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: profile.phone, href: `tel:${profile.phone.replaceAll('-', '')}`, icon: 'phone' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: profile.github, icon: 'github' },
]

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s Build Something Useful">
      <div className="contact-panel">
        <div>
          <p>
            Open to software developer opportunities where scalable APIs, polished front ends,
            data performance, and reliable delivery matter.
          </p>
        </div>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a key={link.href} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon name={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
