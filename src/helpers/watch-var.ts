import { generateId } from './id'

type Subscriber = (value: any, oldValue?: any) => void

class WatchVar {
  private previousValue: any = null
  private value: any
  subscribers: { [key: string]: Subscriber } = {}

  constructor(value: any) {
    this.value = value
  }

  getUniqueId() {
    let id = generateId(10)
    while (this.subscribers[id]) {
      id = generateId(10)
    }
    return id
  }

  s(cb: Subscriber) {
    const id = this.getUniqueId()
    this.subscribers[id] = cb
    return id
  }

  us(id: string) {
    if (this.subscribers[id]) {
      delete this.subscribers[id]
    }
  }

  get _() {
    return this.value
  }

  set _(newValue: any) {
    if (this.value !== newValue) {
      this.previousValue = this.value
      this.value = newValue
      this.notifySubscribers()
    }
  }

  notifySubscribers() {
    for (const id in this.subscribers) {
      this.subscribers[id](this.value, this.previousValue)
    }
  }
}

export default WatchVar
