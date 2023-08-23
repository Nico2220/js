class EventTarget {
  // Write your code here.
  constructor(listeners) {
    this.listeners = {};
  }

  addEventListener(name, callback) {
    if (this.listeners.hasOwnProperty(name)) {
      this.listeners[name].add(callback);
    } else {
      this.listeners[name] = new Set([callback]);
    }
  }

  removeEventListener(name, callback) {
    if (this.listeners.hasOwnProperty(name)) {
      this.listeners[name].delete(callback);

      if (!this.listeners[name].size) {
        delete this.listeners[name];
      }
    }
  }

  dispatchEvent(name) {
    if (this.listeners.hasOwnProperty(name)) {
      this.listeners[name].forEach((callback) => {
        callback();
      });
    }
  }
}

const target = new EventTarget();
target.addEventListener("hello", clickCallBack);
target.addEventListener("hello", () => {});
console.log(target);
target.removeEventListener("hello", clickCallBack);
console.log("remove", target);

function clickCallBack() {
  console.log("HELLO");
}
