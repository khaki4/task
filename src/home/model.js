const URI = 'https://my-json-server.typicode.com/kakaopay-fe/resources/words'

class Model {
  async get() {
    const res = await fetch(URI)
    const jsonData = await res.json()

    return jsonData
  }
}

class WordItem {
  constructor({ time, text }) {
    this.time = time
    this.text = text
  }
}



export default new Model()
