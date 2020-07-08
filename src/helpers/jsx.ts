const SVG_TAGS = [
  'svg', 'path', 'g', 'animate'
]

function createElement(tagName, attrs = {}, ...children) {
  attrs = attrs || {}

  if (typeof (tagName) === 'function') {
    return createComponent(tagName, attrs, children)
  }

  let elem

  if (isSVGTag(tagName)) {
    elem = createSVGElement(tagName, attrs)
  } else {
    elem = Object.assign(document.createElement(tagName), attrs)
  }

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

function isSVGTag(tagName) {
  return SVG_TAGS.includes(tagName)
}

function createSVGElement(tagName, attrs) {
  const elem: HTMLElement = document.createElementNS("http://www.w3.org/2000/svg", tagName)
  for (const a in attrs) {
    elem.setAttribute(a, attrs[a])
  }
  return elem
}

const JSX = {
  createElement,
  createComponent
}

export default JSX