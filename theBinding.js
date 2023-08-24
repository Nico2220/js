Function.prototype.myCall = function (thisContext, ...args) {
  console.log(this);
  const symbol = Symbol;
  thisContext[symbol] = this;
  const returnedValue = thisContext[symbol](...args);

  delete thisContext[symbol];

  return returnedValue;
};

Function.prototype.myApply = function (thisContext, args = []) {
  const symbol = Symbol;
  thisContext[symbol] = this;
  const returnedValue = thisContext[symbol](args);
  delete thisContext[symbol];
  return returnedValue;
};

Function.prototype.myBind = function (thisContext, ...args) {
  console.log("this1=", this);
  return (...newArgs) => {
    console.log("this2=", this);
    const symbol = Symbol;
    thisContext[symbol] = this;
    const returnedValue = thisContext[symbol](...newArgs, ...args);
    delete thisContext[symbol];
    return returnedValue;
  };
};

function greatName(name) {
  return `hello ${this.title} ${name[0]} ${name[1]}`;
}

const obj = {
  title: "MR",
  //   great: greatName,
};

console.log(greatName.myBind(obj, "Jhon"));
