const { gameScore, Clock, WordItemQueue } = require('../shared/model');

const sleep = seconds => new Promise(res => setTimeout(() => res(), seconds * 1000));

describe('GameScore 에서', () => {
  test('올바른 총 점수를 구해야 한다.', () => {
    const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
    const wordItemQueue = new WordItemQueue(wordData, Clock);
    gameScore.setWordItems(wordItemQueue);
    expect(gameScore.total).toEqual(0);
  })

  describe('올바른 평균 답변시간을 구해야 한다.', () => {
    test('빈 리스트 일 경우', () => {
      const wordData = [];
      const wordItemQueue = new WordItemQueue(wordData, Clock);
      gameScore.setWordItems(wordItemQueue);
      while (wordItemQueue.size > 0) {
        const wordItem = wordItemQueue.dequeue()
        wordItem.start()
        wordItem.pass(true)
      }
      expect(gameScore.consumedAverageTime).toEqual(void 0);
    })

    test('모두 성공했을 경우', async () => {
      const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
      const wordItemQueue = new WordItemQueue(wordData, Clock);
      gameScore.setWordItems(wordItemQueue);
      while (wordItemQueue.size > 0) {
        const wordItem = wordItemQueue.dequeue()
        wordItem.start()
        await sleep(2)
        wordItem.pass(true)
      }
      expect(gameScore.consumedAverageTime).toBeGreaterThan(1);
    })

    test('모두 실패', () => {
      const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
      const wordItemQueue = new WordItemQueue(wordData, Clock);
      gameScore.setWordItems(wordItemQueue);
      while (wordItemQueue.size > 0) {
        const wordItem = wordItemQueue.dequeue()
        wordItem.start()
        wordItem.pass(false)
      }
      expect(gameScore.consumedAverageTime).toEqual(void 0);
    })

    test('몇 개만 성공했을 경우', async () => {
      const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
      const wordItemQueue = new WordItemQueue(wordData, Clock);
      gameScore.setWordItems(wordItemQueue);
      const wordItem = wordItemQueue.dequeue()
      wordItem.start()
      await sleep(2)
      wordItem.pass(true)
      expect(gameScore.consumedAverageTime).toBeGreaterThan(1);
    })

  })

  test('clear() 이후 점수가 0으로 되어야 한다.', () => {
    const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
    const wordItemQueue = new WordItemQueue(wordData, Clock);
    gameScore.setWordItems(wordItemQueue);
    wordItemQueue.dequeue().pass(true);

    expect(gameScore.total).toEqual(1)
    gameScore.clear();
    expect(gameScore.total).toEqual(0)

    wordItemQueue.dequeue().pass(false);
    expect(gameScore.total).toEqual(-1)
  })


})
