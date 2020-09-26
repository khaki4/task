const URI = 'https://my-json-server.typicode.com/kakaopay-fe/resources/words'

class Model {
  async get() {
    const res = await fetch(URI)
    const jsonData = await res.json()
    console.log(JSON.stringify(jsonData))
    return jsonData
  }
}

export default new Model()
