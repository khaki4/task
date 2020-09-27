import { timeLeftToString } from '../shared/timeFormat'

describe('timeLeftToString 에서', () => {
  test('올바른 format이 이뤄져야한다.', () => {
    const str = timeLeftToString(void 0)
    expect(str).toEqual('남은시간: -');

    const str2 = timeLeftToString(1)
    expect(str2).toEqual('남은시간: 1초');
  });
});
