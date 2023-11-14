// ============= Test Cases =============
import type { Equal, Expect } from './../test-utils'

type cases = [
  Expect<Equal<Head<[1, 2, 3]>, 1>>,
  Expect<Equal<Head<[[1, 2], [3, 4], [5, 6]]>, [1, 2]>>,
  Expect<Equal<Head<[true]>, true>>,

  // @ts-expect-error
  Expect<Equal<Head<[]>, never>>,

  Expect<Equal<Tail<[1, 2, 3]>, [2, 3]>>,
  Expect<Equal<Tail<[[1, 2], [3, 4], [5, 6]]>, [[3, 4], [5, 6]]>>,
  Expect<Equal<Tail<[true]>, []>>,

  // @ts-expect-error
  Expect<Equal<Tail<[]>, never>>,
]

// ============= Your Code Here =============

type Head<T extends readonly [any, ...any[]]> =
  T extends [infer First, ...infer _] ? First : never

type Tail<T extends readonly [any, ...any[]]> =
  T extends [infer _, ...infer Rest] ? Rest : never
