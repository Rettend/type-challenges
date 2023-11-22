// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import type { First, Shift } from './my-stuff/string operations'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,

  Expect<Equal<TrimLeftSimple<'str'>, 'str'>>,
  Expect<Equal<TrimLeftSimple<' str'>, 'str'>>,
  Expect<Equal<TrimLeftSimple<'     str'>, 'str'>>,
  Expect<Equal<TrimLeftSimple<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeftSimple<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeftSimple<''>, ''>>,
  Expect<Equal<TrimLeftSimple<' \n\t'>, ''>>,
]

// ============= Your Code Here =============
type WhiteSpace = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = First<S> extends WhiteSpace ? TrimLeft<Shift<S>> : S

type TrimLeftSimple<S extends string> = S extends `${WhiteSpace}${infer Rest}` ? TrimLeft<Rest> : S

type a = TrimLeftSimple<'  str'>
