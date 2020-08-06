import JSX from '../../helpers/jsx'

import Logo from '../logo/logo'
import { Link } from '../../helpers/router'

import './header.scss'

export default function Header() {
  const root = (
    <div className="header">
      <div className="header__content margin">
        <Link className="header__logo" href="/">
          <Logo size={50} />
        </Link>
      </div>
    </div>
  )

  return root
}
