import JSX from '../../helpers/jsx'
import { navigate } from '../../helpers/router'

import './projects.css'

function Card({ data }) {
  const { title, desc } = data

  const root = (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{desc}</p>
    </div>
  )
  return root
}

const data = [
  { path: 'project-1', title: 'Awesome project', desc: 'sdljfndlsf ljdlfk jsdkljf sdf' },
  { path: 'project-2', title: 'Another Project', desc: 'gukwefiojfojeroijfe v8we7f98we7' },
  { path: 'project-3', title: 'this website', desc: 'sdljfndlsf ljdlfk jsdkljf sdf' },
]

export default function Projects() {

  function handleCardClick(path: string) {
    // TODO: Use path here for navigation
    navigate('/')
  }

  return (
    <div>
      <ul className="project-list">
        {data.map(e => (
          <li className="project-list__item" onclick={() => handleCardClick(e.path)}>
            <Card data={e} />
          </li>
        ))}
      </ul>
    </div>
  )
}