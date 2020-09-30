export const timeLeftToString = (timeLeft?: number) => {
  if (timeLeft === undefined) {
    return '남은시간: -';
  } else {
    return '남은시간: ' + timeLeft + '초';
  }
};
