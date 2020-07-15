import projectList from '../../data/projects/list.md'

interface IProjectInfo { title: string, text: string, path: string }

interface IState {
  projectInfos: IProjectInfo[],
}

const state: IState = { projectInfos: [] }

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

function init() {
  state.projectInfos = initProjectList()
}

function get(key) {
  return state[key]
}

export default {
  init,
  get
}