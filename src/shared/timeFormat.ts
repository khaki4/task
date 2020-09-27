export const timeLeftToString = (timeLeft) => {
  if (timeLeft === undefined) {
    return '남은시간: -';
  } else {
    return '남은시간: ' + timeLeft + '초';
  }
}
