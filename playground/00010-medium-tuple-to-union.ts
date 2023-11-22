// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,

  Expect<Equal<TupleToUnion2<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion2<[123]>, 123>>,

  Expect<Equal<TupleToUnionSimple<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnionSimple<[123]>, 123>>,

  Expect<Equal<TupleToUnionRecursive<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnionRecursive<[123]>, 123>>,
]

// ============= Your Code Here =============
type TupleToUnionRecursive<T extends readonly unknown[]> =
  T extends readonly [infer First, ...infer Rest]
    ? First | TupleToUnion<Rest> : never

type TupleToUnionSimple<T extends readonly unknown[]> = T[number]

type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never

type TupleToUnion2<T> = T extends (infer ITEMS)[] ? ITEMS : never
