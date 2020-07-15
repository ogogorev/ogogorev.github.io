import JSX from './jsx'

const navEvent = new Event('router-navigation')
let mountedRoute = null

export function Router({ routes }) {
  const routerContainer = <div></div>

  window.addEventListener('popstate', (e) => {
    mountRoute(routerContainer, routes)
  })
  window.addEventListener('router-navigation', (e) => {
    mountRoute(routerContainer, routes)
  })

  mountRoute(routerContainer, routes)
  return routerContainer
}

function getCurrentPath(): string[] {
  const pathname = window.location.pathname.replace(/^\//, '').split('/')
  return pathname
}

function mountRoute(root, routes) {
  const pathname = getCurrentPath()
  const route = pathname[0]
  const nodeToMount = routes[route]

  if (nodeToMount && route !== mountedRoute) {
    root.innerHTML = ''
    root.appendChild(nodeToMount())
    mountedRoute = route
  }
}

function goTo(path: string) {
  const url = path
  window.history.pushState(null, null, url)
  window.dispatchEvent(navEvent)
}

export function navigate(path: string) {
  const url = window.location.origin + path
  goTo(url)
}

function onClick(e: MouseEvent) {
  e.preventDefault()
  goTo(this.href)
}

export function Link(props) {
  return (
    <a
      href={props.href}
      className={props.className}
      onclick={onClick}
    >{props.children}</a>
  )
}