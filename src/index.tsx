export { default as JSX } from './helpers/jsx'
import JSX from './helpers/jsx'

import { Router } from './helpers/router'

import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Footer from './components/footer/footer'

import './styles/styles.css'

const routes = {
  '': Home,
  'projects': Projects
}

function main() {
  const app = (
    <div id="app">
      <Router routes={routes} />
      <Footer />
    </div>
  )

  app.style.minHeight = window.innerHeight + 'px'

  document.body.appendChild(app)
}

main()