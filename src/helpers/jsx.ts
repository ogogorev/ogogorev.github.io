const JSX = {
  createElement: function (tagName, attrs = {}, ...children) {

    // console.log('CREATE ELEMENT CALLED', tagName)

    if (typeof (tagName) === 'function') {
      return tagName()
    }

    const elem = Object.assign(document.createElement(tagName), attrs)
    for (const child of children) {
      if (Array.isArray(child)) elem.append(...child)
      else elem.append(child)
    }
    return elem
  }
}

export default JSX