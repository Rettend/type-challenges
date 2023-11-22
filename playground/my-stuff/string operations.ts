// ============= Test Cases =============
import type { Equal, Expect } from '../test-utils'

type cases = [
  Expect<Equal<Shift<'str'>, 'tr'>>,
  Expect<Equal<Shift<'hello guys'>, 'ello guys'>>,
  Expect<Equal<Shift<'a'>, ''>>,
  Expect<Equal<Shift<''>, ''>>,

  Expect<Equal<First<'str'>, 's'>>,
  Expect<Equal<First<'hello guys'>, 'h'>>,
  Expect<Equal<First<'a'>, 'a'>>,
  Expect<Equal<First<''>, ''>>,
]

// ============= Your Code Here =============
export type Shift<S extends string> = S extends `${infer _}${infer Rest}` ? Rest : ''

export type First<S extends string> = S extends `${infer First}${infer _}` ? First : ''
