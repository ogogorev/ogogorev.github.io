import JSX from './jsx'

const navEvent = new Event('router-navigation')
let mountedRoute = null

export function Router({ routes }) {
  const routerContainer = <div></div>

  window.addEventListener('popstate', e => {
    mountRoute(routerContainer, routes)
    sendRouteChangeEvent()
  })
  window.addEventListener('router-navigation', e => {
    mountRoute(routerContainer, routes)
    sendRouteChangeEvent()
  })

  mountRoute(routerContainer, routes)
  return routerContainer
}

export function getCurrentPath(): string[] {
  let pathname = window.location.pathname.replace(/^\//, '').split('/')
  if (pathname.length === 0 && localStorage.getItem('redirection-route')) {
    pathname = localStorage
      .getItem('redirection-route')
      .replace(/^\//, '')
      .split('/')
    localStorage.removeItem('redirection-route')
  }
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
  if (path[0] !== '/') {
    path = '/' + path
  }

  const url = `${window.location.origin}${path}`

  window.history.pushState(null, null, url)
  window.dispatchEvent(navEvent)
}

export function navigate(path: string) {
  goTo(path)
}

function sendRouteChangeEvent() {
  const routeChangeEvent = new CustomEvent('route-change', {
    detail: { currentPath: getCurrentPath() },
  })
  window.dispatchEvent(routeChangeEvent)
}

function onClick(e: MouseEvent) {
  e.preventDefault()
  goTo(this.getAttribute('href'))
}

export function Link(props) {
  return (
    <a href={props.href} className={props.className} onclick={onClick}>
      {props.children}
    </a>
  )
}
