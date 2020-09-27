const { WordItem, Clock } = require('../shared/model');

const sleep = seconds => new Promise(res => setTimeout(() => res(), seconds * 1000));

describe('WordItem 에서', () => {
  test('단어 설정이 올바르게 되어야 한다.', () => {
    const wordItem = new WordItem({ text: 'world', second: 10 }, Clock)
    expect(wordItem.value).toEqual({ text: 'world', second: 10, isPassed: void 0, timeConsumed: 0});
  })

  test('지정된 시간이 지나면 유효하지 않은 word로 판정되야 한다.', async () => {
    const wordItem = new WordItem({ text: 'world', second: 1 }, Clock)
    wordItem.start()
    await sleep(2)
    expect(wordItem.isExpired).toBeTruthy()
  })

  test('start 하지 않았다면 time이 줄어들지 않아야 한다.', async () => {
    const wordItem = new WordItem({ text: 'world', second: 5 }, Clock)
    await sleep(2)
    expect(wordItem.value.second).toEqual(5)
    wordItem.start()
  })

  test('일정 기간의 시간 이후에 시간을 올바르게 가져와야 한다.', async () => {
    const wordItem = new WordItem({ text: 'world', second: 5 }, Clock)
    wordItem.start()
    await sleep(2)
    expect(wordItem.value.second).toBeLessThan(5)
  })

  test('입력된 word와 비교 올바른지 판단 해야한다.', async () => {
    const wordItem = new WordItem({ text: 'world', second: 1 }, Clock)
    wordItem.start()
    expect(wordItem.compareWith('world')).toBeTruthy()
    expect(wordItem.compareWith('world1')).toBeFalsy()
  })

  test('정답 성공/실패에 따른 정보를 저장해야한다.', async () => {
    const wordItem1 = new WordItem({ text: 'world', second: 4 }, Clock)
    wordItem1.start()
    wordItem1.pass(true)
    expect(wordItem1.value.isPassed).toBeTruthy()

    const wordItem2 = new WordItem({ text: 'world', second: 4 }, Clock)
    wordItem2.start()
    wordItem2.pass(false)
    expect(wordItem2.value.isPassed).toBeFalsy()
  })

  test('정답을 맞출 때 까지 사용된 시간을 올바르게 저장해야한다.', async () => {
    const wordItem = new WordItem({ text: 'world', second: 4 }, Clock)
    wordItem.start()
    await sleep(2)
    wordItem.pass()
    expect(wordItem.value.timeConsumed).toBeLessThan(4)
  })

  test('reset 했을때 초기화 되어야 한다.', async () => {
    const wordItem = new WordItem({ text: 'world', second: 4 }, Clock)
    wordItem.start()
    await sleep(2)
    expect(wordItem.value.second).toBeLessThan(4);
    wordItem.reset();
    expect(wordItem.value).toEqual({ text: 'world', second: 4, timeConsumed: 0, isPassed: void 0});
  })
});
