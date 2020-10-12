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
  let pathname = window.location.pathname
  // if we are on the root and there is a saved route in the lcoal storage
  // (that indicates that we got redirected from 404 page),
  // then we take the route from the local storage
  // This is needed because github pages can't handle routes for SPA apps
  if (pathname === '/' && localStorage.getItem('redirection-route')) {
    pathname = localStorage.getItem('redirection-route')
    window.history.replaceState(null, null, pathname)
    localStorage.removeItem('redirection-route')
  }
  return pathname.replace(/^\//, '').split('/')
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
