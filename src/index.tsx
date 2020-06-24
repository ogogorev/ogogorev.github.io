export { default as JSX } from './helpers/jsx'
import JSX from './helpers/jsx'

import Home from './components/home'

function main() {

  const app = (
    <div id="app">
      <Home />
    </div>
  )

  document.body.appendChild(app)
}

main()