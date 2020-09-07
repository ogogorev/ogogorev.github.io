import projectList from '../../data/projects/list.json'

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

async function initProjectList() {
  return projectList as IProjectInfo[]
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
  state.projectInfos = await initProjectList()
  // console.log('STATE', state.projectInfos, state.projects)
  state.projects = await initProjectContents()
  // console.log('STATE', state.projectInfos, state.projects)
}

function get(key) {
  return state[key]
}

export default {
  init,
  get,
}
