import test from "./src/test";

export interface Model {
  test: string
}

export function doStuff(x: Model) {
  console.log("doing stuff with: ", x, test(1));
}