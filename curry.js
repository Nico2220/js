function curry(callback) {
  return function curriedFunction(...args) {
    if (args.length === 0) {
      return callback(...args);
    }

    return function (...otherArgs) {
      if (otherArgs.length === 0) {
        return callback(...args);
      }
      return curriedFunction(...args, ...otherArgs);
    };
  };
}

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

const curriedSum = curry(sum);
curriedSum();
curriedSum(1)(2)();
