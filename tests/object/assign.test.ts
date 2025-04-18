import * as _ from 'radashi'

describe('assign', () => {
  const initial = {
    name: 'jay',
    cards: ['ac'],
    location: {
      street: '23 main',
      state: {
        abbreviation: 'FL',
        name: 'Florida',
      },
    },
  }
  const override = {
    name: 'charles',
    cards: ['4c'],
    location: {
      street: '8114 capo',
      state: {
        abbreviation: 'TX',
        name: 'Texas',
      },
    },
  }
  test('correctly assign a with values from b', () => {
    const result = _.assign(initial, override)
    expect(result).toEqual(override)
  })
  test('handles initial have unique value', () => {
    const result = _.assign({ a: 'x' }, {})
    expect(result).toEqual({ a: 'x' })
  })
  test('handles override have unique value', () => {
    const result = _.assign({}, { b: 'y' })
    expect(result).toEqual({ b: 'y' })
  })
  test('handles null overriding nested object', () => {
    const result = _.assign({ a: { b: { c: 1 } } }, { a: { b: null } })
    expect(result).toEqual({ a: { b: null } })
  })
  test('works with Object.create(null)', () => {
    const object = { a: Object.create(null) }
    object.a.b = 1

    const result = _.assign(object, { a: { c: 2 } })

    expect(result).toEqual({ a: { b: 1, c: 2 } })
    expect(Object.getPrototypeOf(result.a)).toBe(null)
  })
})
