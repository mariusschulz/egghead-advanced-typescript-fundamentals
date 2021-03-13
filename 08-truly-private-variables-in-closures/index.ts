function createCounter() {
  let value = 0;
  return {
    increment() {
      value += 1;
    },
    get count() {
      return value;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.count);
