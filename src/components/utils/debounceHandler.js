const debounceHandler = (fn, delay) => {
  let timeOutId;
  return (...args) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default debounceHandler;
