import Home from './components/home'
import { Router } from './helpers/router'
export { default as JSX } from './helpers/jsx'

function main() {

  const router = new Router()

  const appDiv = document.createElement('div')
  appDiv.id = '#app'
  appDiv.appendChild(Home())
  document.body.appendChild(appDiv)
}

main()