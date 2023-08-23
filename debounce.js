function debounce(callback, delay, immediate = false) {
  // Write your code here.
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);

    const shouldCallImmediately = timeoutId == null && immediate;

    if (shouldCallImmediately) {
      callback.apply(this, args);
    }

    timeoutId = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }
      timeoutId = null;
    }, delay);
  };
}

function fetchSearchResults(query) {
  console.log("Fetching results for:", query);
}

document.addEventListener("keypress", () => debounce(fetchSearchResults, 300));
