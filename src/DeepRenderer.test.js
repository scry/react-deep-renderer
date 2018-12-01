const React = require('react')
const DeepRenderer = require('./DeepRenderer')

const e = React.createElement

test('should return null if given null', function () {
  expect(DeepRenderer.render(null)).toBe(null)
})

test('should return a single entity if given a dom node', function () {
  const div = e('div')

  expect(DeepRenderer.render(div)).toEqual({
    type: 'div',
    children: [],
    begits: []
  })
})

test('should return the correct dom type', function () {
  const types = ['div', 'span', 'p']
  
  types.forEach(type => {
    expect(DeepRenderer.render(e(type))).toEqual({
      type,
      children: [],
      begits: []
    })
  })
})

test('should return a tree if given a dom node with children', function () {
  const div = e('div', null, e('span'))

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
