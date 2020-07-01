function createElement(tagName, attrs = {}, ...children) {
  attrs = attrs || {}

  if (typeof (tagName) === 'function') {
    return createComponent(tagName, attrs, children)
  }

  const elem = Object.assign(document.createElement(tagName), attrs)
  for (const child of children) {
    if (Array.isArray(child)) elem.append(...child)
    else elem.append(child)
  }

  return elem
}

function createComponent(tagName, attrs = {}, ...children) {
  const node = tagName({ ...attrs, children })
  return node
}

const JSX = {
  createElement,
  createComponent
}

export default JSX