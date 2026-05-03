import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.shortName}. Built with React and Vite.</p>
      <a href="#top">Back to top</a>
    </footer>
  )
}
