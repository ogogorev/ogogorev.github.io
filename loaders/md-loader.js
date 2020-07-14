function parseHeading(str) {
  let i = 0
  while (str[i] === '#') {
    i++
  }

  const content = str.replace(/^[#]+[\s]?/, '')
  return { type: 'h' + i, content }
}

function parseListItem(str) {
  const content = str.replace(/^-\s/, '')
  return { type: 'li', content }
}

function parseP(str) {
  return { type: 'p', content: str }
}

module.exports = function parseMarkdown(str) {
  const rawArray = str
    .split('\r\n')
    .filter(e => !!e)

  const parsed = []

  for (let i = 0; i < rawArray.length; i++) {
    switch (rawArray[i][0]) {
      case '#':
        parsed.push(parseHeading(rawArray[i]))
        break;

      case '-':
        const content = []

        while (rawArray[i] && rawArray[i][0] === '-') {
          content.push(parseListItem(rawArray[i]))
          i++
        }
        i--
        parsed.push({ type: 'l', content })
        break;

      default:
        parsed.push(parseP(rawArray[i]))
    }
  }

  return `export default ${JSON.stringify(parsed)}`
}