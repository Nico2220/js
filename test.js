function test() {
  try {
    throw `you throw it ${5} time`;
    console.log("hello");
  } catch (err) {
    console.log("we catch it , dont worry");
    console.log(`this is the errorMessage:`, JSON.stringify(err));
  }
}

test();
