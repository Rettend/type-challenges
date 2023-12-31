// ============= Test Cases =============
import type { Equal, Expect } from '../test-utils'

type cases = [
  Expect<Equal<First<'str'>, 's'>>,
  Expect<Equal<First<'hello guys'>, 'h'>>,
  Expect<Equal<First<'a'>, 'a'>>,
  Expect<Equal<First<''>, ''>>,

  Expect<Equal<Shift<'str'>, 'tr'>>,
  Expect<Equal<Shift<'hello guys'>, 'ello guys'>>,
  Expect<Equal<Shift<'a'>, ''>>,
  Expect<Equal<Shift<''>, ''>>,

  Expect<Equal<Last<'str'>, 'r'>>,
  Expect<Equal<Last<'hello guys'>, 's'>>,
  Expect<Equal<Last<'a'>, 'a'>>,
  Expect<Equal<Last<''>, ''>>,

  Expect<Equal<Pop<'str'>, 'st'>>,
  Expect<Equal<Pop<'hello guys'>, 'hello guy'>>,
  Expect<Equal<Pop<'a'>, ''>>,
  Expect<Equal<Pop<''>, ''>>,
]

// ============= Your Code Here =============
export type First<S extends string> = S extends `${infer First}${string}` ? First : ''

export type Shift<S extends string> = S extends `${string}${infer Rest}` ? Rest : ''

export type Last<S extends string> = S extends `${string}${infer Rest}` ?
    (Rest extends '' ? S : Last<Rest>) : ''

export type Pop<S extends string> = S extends `${infer First}${infer Rest}` ?
    (Rest extends '' ? '' : `${First}${Pop<Rest>}`) : ''

