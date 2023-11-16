// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

// ============= Your Code Here =============
// type TupleToUnion<T extends readonly unknown[]> =
//   T extends readonly [infer First, ...infer Rest]
//     ? First | TupleToUnion<Rest> : never

// type TupleToUnion<T extends readonly unknown[]> = T[number]

type a = TupleToUnion<[123, '456', true]>

type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never
