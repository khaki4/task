const { gameScore } = require('../home/model');

const sleep = seconds => new Promise(res => setTimeout(() => res(), seconds * 1000));

describe('GameScore 에서', () => {
  test('올바른 총 점수를 구해야 한다.', () => {
    expect(gameScore.totall).toEqual(0)
    gameScore.totall = 3
    expect(gameScore.totall).toEqual(3)
    gameScore.totall = 3
    expect(gameScore.totall).toEqual(6)
  })

  test('clear() 이후 점수가 0으로 되어야 한다.', () => {
    gameScore.totall = 3
    gameScore.clear()
    expect(gameScore.totall).toEqual(0)
  })
});
