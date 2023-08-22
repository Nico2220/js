function describe(testSuiteName, func) {
  console.log(`beginning test suite ${testSuiteName}`);
  try {
    func();
    console.log(`successfully completed test suite ${testSuiteName}`);
  } catch (err) {
    const { errorMessage, testCaseName } = err;
    console.error(
      `failed running test suite ${testSuiteName} on test case ${testCaseName} with error message ${errorMessage}"`
    );
  }
}

function it(testCaseName, func) {
  console.log(`beginning test case ${testCaseName}`);
  try {
    func();
    console.log(`successfully completed test case ${testCaseName}`);
  } catch (errorMessage) {
    return { errorMessage, testCaseName };
  }
}

function expect(actual) {
  // Write your code here.
  return new ExpectFunctions(actual);
}

class ExpectFunctions {
  constructor(actual) {
    this.actual = actual;
    this.stringifiedActual = JSON.stringify(actual);
  }

  toExist() {
    if (this.actual === null || this.actual === undefined) {
      throw `expected value to exist but got ${this.stringifiedActual}`;
    }
  }

  toBe(expected) {
    if (this.actual !== expected) {
      throw `expected ${this.stringifiedActual} to be ${JSON.stringify(
        expected
      )}`;
    }
  }

  toBeType(type) {
    if (typeof this.actual !== type) {
      throw `expected ${
        this.stringifiedActual
      } to be of type ${type} but got ${typeof this.actual}`;
    }
  }
}

const r = expect(1);
console.log(r);
