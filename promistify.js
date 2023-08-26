function promisify(callback) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function handleErrorAndValue(error, value) {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      }
      callback.call(this, ...args, handleErrorAndValue);
    });
  };
}

function adder(x, y, handleErrorAndValue) {
  const value = x + y;
  if (typeof value !== "number") {
    const error = new Error("Not a number");
    handleErrorAndValue(error, null);
  } else {
    handleErrorAndValue(null, value);
  }
}

const promisifyAdder = promisify(adder);

promisifyAdder(1, "1")
  .then((v) => console.log(v))
  .catch((err) => console.log(err));
