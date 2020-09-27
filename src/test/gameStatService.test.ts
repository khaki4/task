import { WordItem } from "../shared/models/WordItem";
import { WordItemQueue } from "../shared/models/WordItemQueue";
import { gameStatService } from "../shared/services/GameStat.service";

const sleep = (seconds) =>
  new Promise((res) => setTimeout(() => res(), seconds * 1000));

describe("GameScore 에서", () => {
  test("올바른 총 점수를 구해야 한다.", () => {
    const wordData = [
      { text: "hello", second: 10 },
      { text: "world", second: 11 },
    ];
    const wordItemQueue = new WordItemQueue(wordData);
    gameStatService.setWordItems(wordItemQueue);
    expect(gameStatService.total).toEqual(0);
  });

  describe("올바른 평균 답변시간을 구해야 한다.", () => {
    test("빈 리스트 일 경우", () => {
      const wordData = [];
      const wordItemQueue = new WordItemQueue(wordData);
      gameStatService.setWordItems(wordItemQueue);
      while (wordItemQueue.size > 0) {
        const wordItem = wordItemQueue.dequeue();
        if (wordItem instanceof WordItem) {
          wordItem.start();
          wordItem.pass(true);
        }
      }
      expect(gameStatService.consumedAverageTime).toEqual(void 0);
    });

    test("모두 성공했을 경우", async () => {
      const wordData = [
        { text: "hello", second: 10 },
        { text: "world", second: 11 },
      ];
      const wordItemQueue = new WordItemQueue(wordData);
      gameStatService.setWordItems(wordItemQueue);
      while (wordItemQueue.size > 0) {
        const wordItem = wordItemQueue.dequeue();
        if (wordItem instanceof WordItem) {
          wordItem.start();
          await sleep(2);
          wordItem.pass(true);
        }
      }
      expect(gameStatService.consumedAverageTime).toBeGreaterThan(1);
    });

    test("모두 실패", () => {
      const wordData = [
        { text: "hello", second: 10 },
        { text: "world", second: 11 },
      ];
      const wordItemQueue = new WordItemQueue(wordData);
      gameStatService.setWordItems(wordItemQueue);
      while (wordItemQueue.size > 0) {
        const wordItem = wordItemQueue.dequeue();
        if (wordItem instanceof WordItem) {
          wordItem.start();
          wordItem.pass(false);
        }
      }
      expect(gameStatService.consumedAverageTime).toEqual(void 0);
    });

    test("몇 개만 성공했을 경우", async () => {
      const wordData = [
        { text: "hello", second: 10 },
        { text: "world", second: 11 },
      ];
      const wordItemQueue = new WordItemQueue(wordData);
      gameStatService.setWordItems(wordItemQueue);
      const wordItem = wordItemQueue.dequeue();
      if (wordItem instanceof WordItem) {
        wordItem.start();
        await sleep(2);
        wordItem.pass(true);
      }
      expect(gameStatService.consumedAverageTime).toBeGreaterThan(1);
    });
  });

  test("clear() 이후 점수가 0으로 되어야 한다.", () => {
    const wordData = [
      { text: "hello", second: 10 },
      { text: "world", second: 11 },
    ];
    const wordItemQueue = new WordItemQueue(wordData);
    gameStatService.setWordItems(wordItemQueue);
    const wordItem1 = wordItemQueue.dequeue();
    if (wordItem1 instanceof WordItem) {
      wordItem1.pass(true);
    }

    expect(gameStatService.total).toEqual(1);
    gameStatService.clear();
    expect(gameStatService.total).toEqual(0);

    const wordItem2 = wordItemQueue.dequeue();
    if (wordItem2 instanceof WordItem) {
      wordItem2.pass(false);
    }
    expect(gameStatService.total).toEqual(-1);
  });

  test("game이 종료됐는지 판단할 수 있어야 한다.", () => {
    const wordData = [
      { text: "hello", second: 10 },
      { text: "world", second: 11 },
    ];
    const wordItemQueue = new WordItemQueue(wordData);
    gameStatService.setWordItems(wordItemQueue);
    wordItemQueue.dequeue();
    expect(gameStatService.isFinished).toBeFalsy();
    wordItemQueue.dequeue();
    expect(gameStatService.isFinished).toBeTruthy();

    gameStatService.setWordItems(new WordItemQueue([]));
    expect(gameStatService.isFinished).toBeFalsy();

    gameStatService.setWordItems(new WordItemQueue([]));

    const wordItemQueue1 = new WordItemQueue(wordData);
    gameStatService.setWordItems(wordItemQueue1);
    const item1 = wordItemQueue1.dequeue();
    if (item1 instanceof WordItem) {
      item1.start();
      item1.pass(true);
    }

    const item2 = wordItemQueue1.dequeue();
    if (item2 instanceof WordItem) {
      item2.start();
      item2.pass(false);
    }
    expect(gameStatService.isFinished).toBeTruthy();
  });
});
