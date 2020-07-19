import JSX from '../../helpers/jsx'
import { Link } from '../../helpers/router'
import state from '../../state/state'

import './projects.css'

function Card({ data }) {
  const { title, text, path } = data
  const href = 'projects/' + path

  const root = (
    <Link href={href} className="project-card-container">
      <div className="project-card">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{text}</p>
      </div>
    </Link>
  )
  return root
}

export default function Projects() {
  const projects = state.get('projectInfos')

  window.addEventListener('route-change', (e: CustomEvent) => {
    console.log('route change', e.detail)
  })

  return (
    <div>
      <ul className="project-list">
        {projects.map(p => (
          <li className="project-list__item">
            <Card data={p} />
          </li>
        ))}
      </ul>
    </div>
  )
}
