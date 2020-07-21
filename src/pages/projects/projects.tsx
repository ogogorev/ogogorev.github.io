import JSX from '../../helpers/jsx'
import WatchVar from '../../helpers/watch-var'
import { Link } from '../../helpers/router'
import state from '../../state/state'

import './projects.css'

/**
 *
 * - при нажатии на один из проектов список с проектами уезжает вверх
 *   и превращается в точки.
 * - Позднее эти точки должны будут быть на одном уровне с хэдером.
 *   Но для первой версии можно поместить их под ним.
 *   Точка с выбранным проектом окрашена в фиолетовый цвет (выбрать цвет)
 * - выбранный проект подъезжает снизу вверх.
 * - при выборе другого проекта проекты проматываются вниз или вверх.
 * - при нажатии "назад" в браузере все тоже должно быть анимировано
 * - если сразу открыть какой нибудь проекты - точки уже на месте
 *
 *
 */

function Card({ data }) {
  const { title, text } = data
  const root = (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{text}</p>
    </div>
  )
  return root
}

export default function Projects() {
  const projects = state.get('projectInfos')

  const selectedProject = new WatchVar('')

  window.addEventListener('route-change', (e: CustomEvent) => {
    console.log('route change', e.detail)
    const currentPath = e.detail.currentPath

    if (currentPath[1]) {
      selectedProject._ = currentPath[1]
    }

    currentPath[1] ? collapseList() : expandList()
  })

  selectedProject.s((selected, prev) => {
    updateSelectedLink(selected, prev)
  })

  function updateSelectedLink(selected, prev) {
    const linkNode = projectLinkNodes[selected]
    const prevLinkNode = projectLinkNodes[prev]

    if (linkNode && !linkNode.classList.contains('active')) {
      linkNode.classList.add('active')
    }

    if (prevLinkNode && prevLinkNode.classList.contains('active')) {
      prevLinkNode.classList.remove('active')
    }
  }

  function collapseList() {
    projectList.classList.add('collapsed')
  }

  function expandList() {
    projectList.classList.remove('collapsed')
  }

  const projectLinkNodes = {}
  for (const p of projects) {
    projectLinkNodes[p.path] = (
      <Link href={'projects/' + p.path} className="project-list__item-link">
        <Card data={p} />
      </Link>
    )
  }

  const projectList = (
    <ul className="project-list">
      {Object.values(projectLinkNodes).map(link => (
        <li className="project-list__item">{link}</li>
      ))}
    </ul>
  )

  const root = <div>{projectList}</div>

  return root
}
