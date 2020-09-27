export const rInterval = (callback, delay) => {
  const dateNow = Date.now;
  const requestAnimation = window.requestAnimationFrame;
  let start = dateNow();
  let stop;
  const intervalFunc = () => {
    dateNow() - start < delay || (start += delay, callback());
    stop || requestAnimation(intervalFunc)
  }
  requestAnimation(intervalFunc);
  return {
    clear() {
      stop = 1
    }
  }
}
