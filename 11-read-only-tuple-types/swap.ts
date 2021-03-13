function swap<T, U>(tuple: readonly [T, U]): [U, T] {
  const [first, second] = tuple;
  return [second, first];
}

const keyValuePair: readonly [number, string] = [1, "one"];
const valueKeyPair = swap(keyValuePair);

console.log(keyValuePair);
console.log(valueKeyPair);
