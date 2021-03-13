type ReturnTypeOf<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type A = ReturnTypeOf<() => string>;
type B = ReturnTypeOf<typeof Math.random>;
type C = ReturnTypeOf<typeof Array.isArray>;
type D = ReturnTypeOf<string>;
