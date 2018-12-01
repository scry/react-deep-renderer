const DeepRenderer = require('./DeepRenderer')

test('should return null if given null', function () {
  const deepRenderer = new DeepRenderer()
  deepRenderer.render(null)
  const result = deepRenderer.getRenderOutput()
  expect(result).toBe(null)
})
