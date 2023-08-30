function memoize(callback, resolver) {
  const cache = new Map();

  function getCacheKey(...args) {
    return resolver != null ? resolver(...args) : JSON.stringify(args);
  }

  function memoized(...args) {
    cacheKey = getCacheKey(args);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const output = callback(...args);
    cache.set(cacheKey, output);
    return output;
  }

  memoized.clear = function () {
    return cache.clear();
  };

  memoized.delete = function (...args) {
    cacheKey = getCacheKey(args);
    return cache.delete(cachedKey);
  };

  memoized.has = function (...args) {
    cacheKey = getCacheKey(args);
    return cache.has(cacheKey);
  };

  return memoized;
}

const callback = (...args) => args;
const memoized = memoize(callback);

console.log(memoized(123));
