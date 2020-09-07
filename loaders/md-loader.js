function parseHeading(str) {
  let i = 0
  while (str[i] === '#') {
    i++
  }

  const content = str.replace(/^[#]+[\s]?/, '')
  return { type: 'h' + i, children: content }
}

function parseListItem(str) {
  const content = str.replace(/^-\s/, '')
  return {
    type: 'li',
    children: {
      type: 'text',
      children: content,
    },
  }
}

function parseP(str) {
  const children = []

  let startI = 0
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '[':
        if (i > 0) {
          children.push({ type: 'text', children: str.slice(startI, i) })
          startI = i
        }

        const parsedLink = parseLink(str.slice(i))

        if (parsedLink) {
          children.push(parsedLink)
          const linkLettersCount =
            parsedLink.href.length + parsedLink.children.length + 4
          i += linkLettersCount - 1
          startI = i
        }

        break
      case '`':
        if (i > 0) {
          children.push({ type: 'text', children: str.slice(startI, i) })
          startI = i
        }

        const parsedCode = parseCode(str.slice(i))

        if (parsedCode) {
          children.push(parsedCode)
          const numberOfLetters = parsedCode.children.length + 3
          i += numberOfLetters - 1
          startI = i
        }
        break
    }
  }

  if (startI !== str.length - 1) {
    children.push({ type: 'text', children: str.slice(startI) })
  }

  return { type: 'p', children }
}

const INLINE_CODE_REGEX = /`([^`]*)`/
function parseCode(str) {
  const parsed = str.match(INLINE_CODE_REGEX)
  if (parsed && parsed.length && parsed[1]) {
    return { type: 'code', children: parsed[1] }
  } else {
    return null
  }
}

const LINKS_REGEX = /\[([\w\s\d:\/\.\-?=&%]+)\]\(([\w\d:\/\.\-?=&%]+)\)/
function parseLink(str) {
  const parsed = str.match(LINKS_REGEX)
  if (parsed && parsed.length && parsed[1] && parsed[2]) {
    return { type: 'link', href: parsed[2], children: parsed[1] }
  } else {
    return null
  }
}

function parseLineBreak(str) {
  if (/<br>/.test(str)) {
    return { type: 'br' }
  } else {
    return null
  }
}

module.exports = function parseMarkdown(str) {
  // function parseMarkdown(str) {
  const rawArray = str.split('\r\n').filter(e => !!e)

  const parsed = []

  for (let i = 0; i < rawArray.length; i++) {
    switch (rawArray[i][0]) {
      case '#':
        parsed.push(parseHeading(rawArray[i]))
        break

      case '-':
        const children = []

        while (rawArray[i] && rawArray[i][0] === '-') {
          children.push(parseListItem(rawArray[i]))
          i++
        }
        i--
        parsed.push({ type: 'l', children })
        break

      case '[':
        const parsedLink = parseLink(rawArray[i])
        if (parsedLink) {
          parsed.push(parsedLink)
        } else {
          parsed.push(parseP(rawArray[i]))
        }
        break

      case '<':
        const parsedLineBreak = parseLineBreak(rawArray[i])

        if (parsedLineBreak) {
          parsed.push(parsedLineBreak)
        } else {
          parsed.push(parseP(rawArray[i]))
        }
        break

      default:
        parsed.push(parseP(rawArray[i]))
    }
  }

  return `export default ${JSON.stringify(parsed)}`
  // return parsed
}

// const fs = require('fs')
// const PATH = './data/projects/romangorev.md'
// const fileContent = fs.readFileSync(PATH, { encoding: 'utf-8' })

// console.log(
//   JSON.stringify(
//     parseMarkdown(fileContent),
//     null,
//     2
//   )
// )
