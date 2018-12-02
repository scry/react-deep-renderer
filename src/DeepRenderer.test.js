const React = require('react')
const DeepRenderer = require('./DeepRenderer')

test('should return null if given null', function () {
  expect(DeepRenderer.render(null)).toBe(null)
})

test('should return a single entity if given a dom node', function () {
  const div = <div />

  expect(DeepRenderer.render(div)).toEqual({
    type: 'div',
    children: [],
    begits: []
  })
})

test('should return the correct dom type', function () {
  const types = ['div', 'span', 'p']
  
  types.forEach(Type => {
    expect(DeepRenderer.render(<Type />)).toEqual({
      type: Type,
      children: [],
      begits: []
    })
  })
})

test('should return a render tree if given a dom node with children', function () {
  const div = <div><span /></div>

  expect(DeepRenderer.render(div)).toEqual({
    type: 'div',
    children: [{
      type: 'span',
      children: [],
      begits: []
    }],
    begits: []
  })
})

function FakeComponent () {
  return (
    <div />
  )
}

test('should return a composition tree if given a function component', function () {
  const comp = <FakeComponent />

  expect(DeepRenderer.render(comp)).toEqual({
    type: FakeComponent,
    children: [],
    begits: [{
      type: 'div',
      children: [],
      begits: []
    }]
  })
})
