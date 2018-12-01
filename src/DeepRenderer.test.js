const DeepRenderer = require('./DeepRenderer')

test('should return null if given null', function () {
  expect(DeepRenderer.render(null)).toBe(null)
})
