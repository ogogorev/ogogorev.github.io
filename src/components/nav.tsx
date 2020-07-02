import JSX from '../helpers/jsx'
import { Link } from '../helpers/router'

export default function Navigation() {

  const root = (
    <div>
      <Link href="/">HOME</Link>
      <Link href="/projects">PROJECTS</Link>
      <Link href="/about">ABOUT ME</Link>
    </div>
  )

  return root
}