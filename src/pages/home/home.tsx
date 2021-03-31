import JSX from '../../helpers/jsx'
import { Link } from '../../helpers/router'

import './home.scss'

export default function Home() {
  const container: HTMLElement = (
    <div className="home-page margin">
      <h1 classnName="title">Roman Gorev</h1>

      <p>
        Front-end developer. <br />
        Currently looking for a new challenge. <br /> <br />
        Don't hesitate to take a look at my{' '}
        <Link href="/projects">projects</Link>.
      </p>
    </div>
  )

  return container
}
