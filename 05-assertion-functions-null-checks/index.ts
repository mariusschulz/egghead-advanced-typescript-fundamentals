function assertIsNonNullish<T>(
  value: T,
  message: string
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error(message);
  }
}

const root = document.getElementById("root");
assertIsNonNullish(root, "Couldn't find DOM element #root");

root.addEventListener("click", e => {
  // ...
});
