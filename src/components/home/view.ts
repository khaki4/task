import { timeLeftToString } from "../../shared/timeFormat";
class View {
  render(state, el) {
    const { timeLeft, totalScore, wordForScreen, startButtonStatus } = state;
    el.innerHTML = `
      <div id="home">
        <div class="top">
            <span class="time-left">${timeLeftToString(timeLeft)}</span>
            <span class="score">점수: ${totalScore || 0}점</span>
        </div>
        <div class="word-screen"><span>${wordForScreen}</span></div>
        <input id="wordInput" type="text" placeholder="단어입력" />
        <div>
            ${
              startButtonStatus
                ? '<button type="button" id="start">시작</button>'
                : '<button type="button" id="reset">초기화</button>'
            }
        </div>
      </div>
    `;
  }
}

export default new View();
