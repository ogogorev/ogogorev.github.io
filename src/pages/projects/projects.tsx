import JSX from '../../helpers/jsx'
import WatchVar from '../../helpers/watch-var'
import { Link, getCurrentPath } from '../../helpers/router'
import state from '../../state/state'

import './projects.scss'
import { transformJsonToDOM } from '../../helpers/json-to-dom'

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
  const projectInfos = state.get('projectInfos')
  const projects = state.get('projects')
  const selectedProject = new WatchVar('')

  console.log('projects, infos', projects, projectInfos)

  function init() {
    window.addEventListener('route-change', (e: CustomEvent) => {
      handleCurrentPath()
    })

    selectedProject.s((selected, prev) => {
      updateSelectedLink(selected, prev)
    })

    setTimeout(() => {
      handleCurrentPath()
    }, 0)
  }

  function handleCurrentPath() {
    const path = getCurrentPath()
    const currentProject = path[1] ? path[1] : null
    selectedProject._ = currentProject
    currentProject ? collapseList() : expandList()

    if (currentProject) {
      const prevAct = document.querySelector('.project-post.active')
      console.log('PREV ACT', prevAct)
      prevAct && prevAct.classList.remove('active')
      const curAct = document.querySelector(`#${currentProject}.project-post`)
      console.log('CUR ACT', curAct)
      curAct && curAct.classList.add('active')

      projectPosts.classList.add('active')
    } else {
      projectPosts.classList.remove('active')
    }
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
  for (const p of projectInfos) {
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

  const projectPosts = (
    <div className="project-posts">
      {projects.map(p => (
        <div id={p.path} className="project-post">
          {transformJsonToDOM(p.content)}
        </div>
      ))}
    </div>
  )

  const root = (
    <div className="projects-container">
      {projectList}
      {projectPosts}
    </div>
  )

  init()

  return root
}
