const { timeLeftToString } = require('../shared/timeFormat')

class View {
  render(state, el) {
    const { timeLeft, totalScore, wordForScreen, startButtonStatus } = state
    el.innerHTML = `
      <div id="home">
        <div class="top">
            <div class="time-left">${timeLeftToString(timeLeft)}</div>
            <div class="score">점수: ${totalScore}점</div>
        </div>
        <div class="word-screen">${wordForScreen}</div>
        <input id="word-input" type="text" placeholder="단어입력" />
        <div>
            ${startButtonStatus 
                ? '<button type="button" id="start">시작</button>'
                : '<button type="button" id="reset">초기화</button>'
              }
        </div>
      </div>
    `
  }
}

module.exports = new View()
