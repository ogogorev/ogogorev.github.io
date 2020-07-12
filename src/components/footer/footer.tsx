import JSX from '../../helpers/jsx'
import { Link } from '../../helpers/router'

import './footer.css'

export default function Footer() {

  const root: HTMLElement = (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__menu">
          <Link href="/about" className="footer__link">ABOUT ME</Link>
          <div className="footer__icons-container">
            icons
          </div>
        </div>
      </div>
    </div>
  )

  return root
}