// export class Router {
//   constructor(routes) {
//     console.log('CURRENT Location', window.location.pathname)
//     console.log('routes', routes)
//   }
// }

import JSX from './jsx'

export function Router({ routes }) {
  const pathname = window.location.pathname.replace(/^\//, '')

  window.onpopstate = (e) => {
    console.log('POP STATE EVENT', e)
  }

  console.log('CURRENT pathname', pathname)
  console.log('routes', routes)

  const routeComponent = routes[pathname]

  return routeComponent()
}

function goTo(path: string) {
  // const url = window.location.origin + path
  const url = path
  console.log('GO TO', url)
  window.history.pushState(null, null, url)
}

function onClick(e: MouseEvent) {
  e.preventDefault()
  const target = event.target as HTMLAnchorElement
  console.log('path', target.href)
  goTo(target.href)

}

export function Link(props) {
  return (
    // <div>
    //   <div onclick={onClick}>test click</div>
    <a href={props.href} onclick={onClick}>{props.children}</a>
    // </div>
  )
}