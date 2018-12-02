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

let visited = new WeakSet()

class DeepRenderer {
  static render (descriptors) {
    if (descriptors == null) return null
    if (visited.has(descriptors)) return null

    visited.add(descriptors)

    const children = Collection.of(DeepRenderer.render(descriptors.props.children))

    const begits = Collection.of(DeepRenderer.render(dive(descriptors)))

    return {
      type: descriptors.type,
      children,
      begits
    }
  }
}

module.exports = DeepRenderer
