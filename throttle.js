function throttle(callback, delay) {
  let lastCall = 0;
  let timerId;
  function throttleFunction(...args) {
    // const currenTime = Date.now();
    // const timeSinceLastCall = currenTime - lastCalledTime;
    // const delayRemaning = delay - timeSinceLastCall;

    // delay completed, call the callback
    if (now - lastCall >= delay) {
      const now = new Date().getTime();
      callback.apply(this, args);
      lastCalledTime = currenTime;
    } else {
      // delay not completed schedule the callback
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        lastCalledTime = Date.now();
        callback.apply(this, args);
      }, delayRemaning);
    }
  }

  throttleFunction.cancel = function () {
    clearTimeout(timerId);
  };

  return throttleFunction;
}
