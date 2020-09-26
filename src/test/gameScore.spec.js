const { gameScore, Clock, WordItemQueue } = require('../shared/model');

describe('GameScore 에서', () => {
  test('올바른 총 점수를 구해야 한다.', () => {
    const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
    const wordItemQueue = new WordItemQueue(wordData, Clock);
    gameScore.setWordItems(wordItemQueue);
    expect(gameScore.totall).toEqual(0);
  })

  test('clear() 이후 점수가 0으로 되어야 한다.', () => {
    const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
    const wordItemQueue = new WordItemQueue(wordData, Clock);
    gameScore.setWordItems(wordItemQueue);
    wordItemQueue.dequeue().pass(true);

    expect(gameScore.totall).toEqual(1)
    gameScore.clear();
    expect(gameScore.totall).toEqual(0)

    wordItemQueue.dequeue().pass(false);
    expect(gameScore.totall).toEqual(-1)
  })
});
