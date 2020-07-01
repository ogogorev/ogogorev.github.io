export { default as JSX } from './helpers/jsx'
import JSX from './helpers/jsx'

import { Router } from './helpers/router'
import Home from './components/home'
import Projects from './components/projects'

const routes = {
  '': Home,
  'projects': Projects
}

function main() {
  const app = (
    <div id="app">
      <Router routes={routes} />
    </div>
  )

  document.body.appendChild(app)
}

main()