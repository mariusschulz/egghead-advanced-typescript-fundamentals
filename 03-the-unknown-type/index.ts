function range(from: number, to: number): number[];
function range(from: unknown, to: unknown): number[] {
  if (typeof from !== "number" || typeof to !== "number") {
    throw Error("range() expects exactly 2 numbers");
  }

  const values: number[] = [];
  for (let i = from; i < to; i++) {
    values.push(i);
  }
  return values;
}

console.log(range(0, 5));
