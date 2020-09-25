import app from './app'
import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  app.init()
})

if (module.hot) {
  module.hot.accept("./app", async () => {
    app.init()
  })
}
