import JSX from '../../helpers/jsx'
import { Link } from '../../helpers/router'
import githubIconSrc from '../../assets/img/github.svg'
import linkedInIconSrc from '../../assets/img/linkedin.svg'

import './footer.scss'

export default function Footer() {
  const root: HTMLElement = (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__menu margin">
          <Link href="/about" className="footer__link">
            ABOUT ME
          </Link>
          <div className="footer__external-links-container">
            <a href="https://github.com/ogogorev" target="_blank">
              <img src={githubIconSrc} alt="" />
            </a>
            <a href="https://de.linkedin.com/" target="_blank">
              <img src={linkedInIconSrc} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return root
}
