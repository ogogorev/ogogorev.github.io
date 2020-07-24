import JSX from '../../helpers/jsx'
import WatchVar from '../../helpers/watch-var'
import { Link, getCurrentPath } from '../../helpers/router'
import state from '../../state/state'

import './projects.scss'

/**
 *
 * - при нажатии на один из проектов каждый проект схлопывается в точку и уезжает влево.
 * - Точка с выбранным проектом окрашена в фиолетовый цвет (выбрать цвет)
 * - выбранный проект подъезжает снизу вверх.
 * - при выборе другого проекта проекты проматываются вниз или вверх.
 * - при нажатии "назад" в браузере все тоже должно быть анимировано
 * - если сразу открыть какой нибудь проекты - точки уже на месте
 * - при прокручивании проектов, точки тоже меняются
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

  function init() {
    window.addEventListener('route-change', (e: CustomEvent) => {
      handleCurrentPath()
    })

    selectedProject.s((selected, prev) => {
      updateSelectedLink(selected, prev)
    })

    handleCurrentPath()
  }

  function handleCurrentPath() {
    const path = getCurrentPath()
    path[1] && (selectedProject._ = path[1])
    path[1] ? collapseList() : expandList()
  }

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

  init()

  const root = <div className="projects-container">{projectList}</div>

  return root
}
