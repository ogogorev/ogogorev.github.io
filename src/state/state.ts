import projectList from '../../data/projects/list.md'

interface IProjectInfo {
  title: string
  text: string
  path: string
}

interface IState {
  projectInfos: IProjectInfo[]
  projects: Array<{ path: string; content: any }>
}

const state: IState = { projectInfos: [], projects: [] }

function initProjectList() {
  const projectNodes = projectList

  const nodeGroups = []
  let groupI = -1
  for (let i = 0; i < projectNodes.length; i++) {
    if (projectNodes[i].type[0] === 'h') {
      groupI++
      nodeGroups[groupI] = []
    }

    if (groupI > -1 && Array.isArray(nodeGroups[groupI])) {
      nodeGroups[groupI].push(projectNodes[i])
    }
  }
  const projects: IProjectInfo[] = nodeGroups
    .map(group => group.map(e => (e ? e.content : '')))
    .map(([title, text, path]) => ({ title, text, path }))

  return projects
}

async function initProjectContents() {
  const projects = []
  for (const info of state.projectInfos) {
    const mod = await import(`../../data/projects/${info.path}.md`)
    projects.push({
      path: info.path,
      content: mod.default,
    })
  }
  return projects
}

async function init() {
  state.projectInfos = initProjectList()
  state.projects = await initProjectContents()
}

function get(key) {
  return state[key]
}

export default {
  init,
  get,
}
