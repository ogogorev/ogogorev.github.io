const s = 'qwertyuiopasdfghjklzxcvbnm1234567890'
export function generateId(l: number = 8) {
  let id = ''
  for (let i = 0; i < l; i++) {
    const sI = Math.floor(Math.random() * s.length)
    id += s[sI]
  }
  return id
}