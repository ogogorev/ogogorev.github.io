import JSX from '../../helpers/jsx'

import Logo from '../logo/logo'

import './header.scss'

export default function Header() {
  const root = (
    <div className="header">
      <Logo />
    </div>
  )

  return root
}
