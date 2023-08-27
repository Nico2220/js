Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((result) => resolve(result)).catch((err) => reject(err));
    });
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    promises.forEach((promise) => {
      promise
        .then((result) => resolve(result))
        .catch(() => {
          count++;
          console.log(count);
          if (count === promises.length) {
            reject("all promises rejected");
          }
        });
    });
  });
};

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const resolvedPromises = new Array(promises.length).fill(null);
    let resolvedCount = 0;
    promises.forEach((promise, i) => {
      promise
        .then((result) => {
          resolvedPromises[i] = result;
          console.log(resolvedPromises);
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(resolvedPromises);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    const promiseArray = [];
    let count = 0;
    promises.forEach((promise, i) => {
      console.log(count);
      promise
        .then((r) => {
          const obj = {
            status: "fullfilled",
            value: r,
          };
          promiseArray[i] = obj;
        })
        .catch((error) => {
          const obj = {
            status: "rejected",
            error,
          };
          promiseArray[i] = obj;
        })
        .finally(() => {
          count++;
          if (count === promises.length) {
            resolve(promiseArray);
          }
        });
    });
  });
};

Promise.myAllSettled([
  new Promise((resolve, reject) => setTimeout(() => reject(1), 500)),
  Promise.resolve(10),
])
  .then((r) => console.log(r))
  .catch((err) => console.log(err));
