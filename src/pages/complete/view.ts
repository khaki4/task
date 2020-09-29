class View {
  render(state, el) {
    const { totalScore, consumedAverageTime } = state;
    el.innerHTML = `
    <div id="complete">
        <h2>Mission Complete!</h2>
        <p class="total-score">당신의 점수는 ${
          totalScore === undefined ? "-" : totalScore
        }점 입니다.</p>
        <p class="consumed-time">단어 평균 답변 시간은 ${
          consumedAverageTime == undefined ? "-" : consumedAverageTime
        }초입니다.</p>
        <button type="button" id="reStart">다시 시작</button>
    </div>
    `;
  }
}

export default new View();
