import JSX from '../../helpers/jsx'

function Card({ data }) {
  const { title, desc } = data

  const root = (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
  return root
}

const data = [
  { title: 'Awesome project', desc: 'sdljfndlsf ljdlfk jsdkljf sdf' },
  { title: 'Another Project', desc: 'gukwefiojfojeroijfe v8we7f98we7' },
  { title: 'this website', desc: 'sdljfndlsf ljdlfk jsdkljf sdf' },
]

export default function Projects() {
  return (
    <div>
      <ul className="projects-list">
        {data.map(e => (
          <li className="projects-list__item">
            <Card data={e} />
          </li>
        ))}
      </ul>
    </div>
  )
}