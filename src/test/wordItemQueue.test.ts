import { WordItemQueue, Clock, WordItem } from '../shared/model'

describe('WordItemQueue 에서', () => {
  test('get()이 올바른 값을 리턴해야 한다.', () => {
    const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
    const wordItemQueue = new WordItemQueue(wordData, Clock)
    expect(wordItemQueue.dequeue().value).toEqual(new WordItem({ text: 'hello', second: 10 }, Clock).value);
    expect(wordItemQueue.dequeue().value).toEqual(new WordItem({ text: 'world', second: 11 }, Clock).value);
    expect(wordItemQueue.dequeue().value).toEqual(null);
  })

  test('size가 올바른 값을 리턴해야 한다.', async () => {
    const wordData = [{ text: 'hello', second: 10 }, { text: 'world', second: 11 }];
    const wordItemQueue = new WordItemQueue(wordData, Clock);
    expect(wordItemQueue.size).toEqual(2);
  });
});