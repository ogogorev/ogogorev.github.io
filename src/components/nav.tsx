import JSX from '../helpers/jsx'
import { Link } from '../helpers/router'

export default function Navigation() {

  const root = (
    <div className="navigation">
      <Link href="/" className="navigation__link">HOME</Link>
      <Link href="/projects" className="navigation__link">PROJECTS</Link>
      <Link href="/about" className="navigation__link">ABOUT ME</Link>
    </div>
  )

  return root
}