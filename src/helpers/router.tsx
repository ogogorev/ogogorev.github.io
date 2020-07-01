import JSX from './jsx'

const navEvent = new Event('router-navigation')

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

function getCurrentPath() {
  const pathname = window.location.pathname.replace(/^\//, '')
  return pathname
}

function mountRoute(root, routes) {
  const pathname = getCurrentPath()
  const nodeToMount = routes[pathname]

  if (nodeToMount) {
    root.innerHTML = ''
    root.appendChild(nodeToMount())
  }
}

function goTo(path: string) {
  const url = path
  window.history.pushState(null, null, url)
  window.dispatchEvent(navEvent)
}

function onClick(e: MouseEvent) {
  e.preventDefault()
  const target = e.target as HTMLAnchorElement
  goTo(target.href)
}

export function Link(props) {
  return (
    <a href={props.href} onclick={onClick}>{props.children}</a>
  )
}