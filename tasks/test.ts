import { z } from 'zod'
const Test2 = z.object({
  c: z.string()
})
const Test = z.object({
  a: z.number(),
  b: Test2
});

console.log(Test.parse({a: 1, b: {c: "1"}}))
console.log(Test.parse({a: 1, b: {c: "1", d: 10}}))
console.log(Test.strict().parse({a: 1, b: {c: "1", d: 10}, e: 1}))

