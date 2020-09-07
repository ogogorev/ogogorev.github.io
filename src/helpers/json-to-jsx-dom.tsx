import JSX from './jsx'

interface IJSONNode {
  type: string
  content: any
}

export function transformJsonToDOM(elems: IJSONNode[]) {
  const nodes = []
  for (const e of elems) {
    nodes.push(transformNode(e))
  }
  return nodes
}

function transformNode(node: IJSONNode) {
  switch (node.type) {
    case 'p':
      return <p>{node.content}</p>
    case 'h1':
      return <h1>{node.content}</h1>
    case 'h2':
      return <h2>{node.content}</h2>
    case 'h3':
      return <h3>{node.content}</h3>
    case 'h4':
      return <h4>{node.content}</h4>
    case 'h5':
      return <h5>{node.content}</h5>
    case 'h6':
      return <h6>{node.content}</h6>
    case 'l':
      return <ul>{node.content.map(e => transformNode(e))}</ul>
    case 'li':
      return <li>{node.content}</li>
    case 'link':
      const linkNode = node as any
      return <a href={linkNode.href}>{linkNode.content}</a>
    default:
      return null
  }
}
