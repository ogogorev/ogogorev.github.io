import JSX from '../../helpers/jsx'
import { Link } from '../../helpers/router'
import ToggleMenuButton from '../toggle-menu-button/toggle-menu-button'

import './nav.css'

export default function Navigation() {

  const onMenuButtonToggle = (isOpened) => {
    console.log('on toggle', isOpened)
    toggleNavigation(isOpened)
  }

  const openedClassName = 'opened'
  const toggleNavigation = (isOpened) => {
    (isOpened) ? root.classList.add(openedClassName) : root.classList.remove(openedClassName)
  }

  const root: HTMLElement = (
    <div className="navigation">
      <div className="navigation__placeholder"></div>
      <div className="navigation__content">
        <ToggleMenuButton onToggle={onMenuButtonToggle} />
        <div className="navigation__menu">
          <Link href="/" className="navigation__link">HOME</Link>
          <Link href="/projects" className="navigation__link">PROJECTS</Link>
          <Link href="/about" className="navigation__link">ABOUT ME</Link>
        </div>
      </div>
    </div>
  )

  // const s = getComputedStyle(root)

  // console.log('ROOT', s.transform, s.webkitTransform)

  // root.style.top = window.innerHeight + 'px'

  return root
}