import JSX from '../../helpers/jsx'

import { Link } from '../../helpers/router'

export default function Home() {
  const container: HTMLElement = (
    <div className="margin">
      <h1 style="margin-top: 0">Roman Gorev</h1>

      <p>
        Front-end developer, based in Frankfurt, Germany. <br />
        Currently working at Accenture. <br />
        Feel free to explore my <Link href="/projects">projects</Link>.
      </p>
    </div>
  )

  return container
}
