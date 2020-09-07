import JSX from './jsx'

interface IJSONNode {
  type: string
  children: string | IJSONNode | IJSONNode[]
}

export function transformJsonToDOM(elems: IJSONNode[]) {
  const nodes = []
  for (const e of elems) {
    nodes.push(transformNode(e))
  }
  return nodes
}

function transformChildren(children: string | IJSONNode | IJSONNode[]) {
  if (Array.isArray(children)) {
    return children.map(c => transformNode(c))
  } else if (typeof children === 'object') {
    return transformNode(children)
  } else {
    return children
  }
}

function transformNode(node: IJSONNode) {
  if (typeof node === 'string') {
    return node
  }

  switch (node.type) {
    case 'p':
      return <p>{transformChildren(node.children)}</p>
    case 'h1':
      return <h1>{node.children}</h1>
    case 'h2':
      return <h2>{node.children}</h2>
    case 'h3':
      return <h3>{node.children}</h3>
    case 'h4':
      return <h4>{node.children}</h4>
    case 'h5':
      return <h5>{node.children}</h5>
    case 'h6':
      return <h6>{node.children}</h6>
    case 'l':
      return <ul>{transformChildren(node.children)}</ul>
    case 'li':
      return <li>{transformChildren(node.children)}</li>
    case 'link':
      const linkNode = node as any
      return <a href={linkNode.href}>{linkNode.children}</a>
    case 'br':
      return <br />
    case 'code':
      return <code>{node.children}</code>
    case 'text':
      return node.children
    default:
      return null
  }
}
