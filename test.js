function sum(a, b, c) {
  return a + b + c;
}
function currideSum(func) {
  return function (a) {
    return function (b) {
      return function (c) {
        return func(a, b, c);
      };
    };
  };
}
const r = currideSum(sum);

console.log(r(1)(2)(3));
