import { Clock } from "../shared/model";

const sleep = (seconds) =>
  new Promise((res) => setTimeout(() => res(), seconds * 1000));

describe("Clock class 에서", () => {
  test("시간 설정이 올바르게 되어야 한다.", () => {
    const clock = new Clock(3);
    expect(clock.timeLeft).toBe(3);
  });

  test("일정 기간의 시간 이후에 시간을 올바르게 가져와야 한다.", async () => {
    const clock = new Clock(5);
    await sleep(2);
    expect(clock.timeLeft).toBeLessThan(4);
  });

  test("reset이 정상 작동 해야한다.", async () => {
    const clock = new Clock(5);
    await sleep(2);
    clock.reset();
    expect(clock.timeLeft).toBeLessThan(5);
  });
});
