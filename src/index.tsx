export { default as JSX } from './helpers/jsx'
import JSX from './helpers/jsx'

import { Router } from './helpers/router'
import state from './state/state'

import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import './styles/styles.scss'

setTimeout(() => {
  document.body.className = ''
}, 1000)

const routes = {
  '': Home,
  projects: Projects,
}

async function main() {
  await state.init()

  const app = (
    <div id="app">
      <Header />
      <Router routes={routes} />
      <Footer />
    </div>
  )

  app.style.minHeight = window.innerHeight + 'px'

  document.body.appendChild(app)
}

main()
