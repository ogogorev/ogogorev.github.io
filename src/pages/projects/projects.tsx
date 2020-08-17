import JSX from '../../helpers/jsx'
import WatchVar from '../../helpers/watch-var'
import { Link, getCurrentPath } from '../../helpers/router'
import state from '../../state/state'

import './projects.scss'
import { transformJsonToDOM } from '../../helpers/json-to-dom'
import BurgerIcon from '../../components/burger-icon/burger-icon'

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
      update()
    })

    selectedProject.s((selected, prev) => {
      updateSelectedLink(selected, prev)
    })

    setTimeout(() => {
      update()
    }, 0)
  }

  function update() {
    const path = getCurrentPath()
    const currentProject = path[1] ? path[1] : null
    selectedProject._ = currentProject
    currentProject ? collapseList() : expandList()

    if (currentProject) {
      hideActiveProjectPost()
      displayCurrentProjectPost(currentProject)

      projectPosts.classList.add('active')
    } else {
      hideActiveProjectPost()
      projectPosts.classList.remove('active')
    }

    window.scrollTo(0, 0)
  }

  function hideActiveProjectPost() {
    const node = document.querySelector('.project-post.active')
    node && node.classList.remove('active')
  }

  function displayCurrentProjectPost(projectName) {
    const node = document.querySelector(`#${projectName}.project-post`)
    node && node.classList.add('active')
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
      <li className="project-list__item">
        <Link href={'projects'} className="project-list__list-link">
          <BurgerIcon width="10" height="10" />
        </Link>
      </li>
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
    <div className="projects-container margin">
      {projectList}
      {projectPosts}
    </div>
  )

  init()

  return root
}
