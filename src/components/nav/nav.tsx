import JSX from '../../helpers/jsx'
import { Link } from '../../helpers/router'
import ToggleMenuButton from '../toggle-menu-button/toggle-menu-button'

import './nav.css'

export default function Navigation() {

  const root: HTMLElement = (
    <div className="navigation">
      <div className="navigation__content">
        <div className="navigation__menu">
          <Link href="/" className="navigation__link">HOME</Link>
          <Link href="/projects" className="navigation__link">PROJECTS</Link>
          <Link href="/about" className="navigation__link">ABOUT ME</Link>
        </div>
      </div>
    </div>
  )

  return root
}