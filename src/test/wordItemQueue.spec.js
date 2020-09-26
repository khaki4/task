const { WordItemQueue } = require('../home/model');
const { Clock } = require('../shared/Clock');

const sleep = seconds => new Promise(res => setTimeout(() => res(), seconds * 1000));

describe('WordItemQueue 에서', () => {
  test('get()이 올바른 값을 리턴해야 한다.', () => {
    const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
    const wordItemQueue = new WordItemQueue(wordData, Clock)
    expect(wordItemQueue.get().value).toEqual({ text: 'hello', second: 10 });
    expect(wordItemQueue.get().value).toEqual({ text: 'world', second: 11 });
    expect(wordItemQueue.get().value).toEqual(null);
  })

  test('size가 올바른 값을 리턴해야 한다.', async () => {
    const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
    const wordItemQueue = new WordItemQueue(wordData, Clock);
    expect(wordItemQueue.size).toEqual(2);
  })
});
