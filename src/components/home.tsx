import JSX from '../helpers/jsx'

import { Link } from '../helpers/router'

export default function Home() {
  const container = (
    <div>
      Home page

      Links:
      <ul>
        <li>
          <Link href="/projects">Projects link</Link>
        </li>
      </ul>
    </div>
  )

  return container
}