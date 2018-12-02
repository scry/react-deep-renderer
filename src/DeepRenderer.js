class Collection {
  static of (a) {
    const asArray = Array.isArray(a) ? a : [a]
    
    return asArray.filter(x => x != null)
  }
}

function dive (descriptors) {
  switch (typeof descriptors.type) {
    case 'string':
      return null
    case 'function':
      return descriptors.type(descriptors.props)
  }
}

class DeepRenderer {
  static render (descriptors) {
    if (descriptors == null) return null

    return {
      type: descriptors.type,
      children: Collection.of(DeepRenderer.render(descriptors.props.children)),
      begits: Collection.of(DeepRenderer.render(dive(descriptors)))
    }
  }
}

module.exports = DeepRenderer
