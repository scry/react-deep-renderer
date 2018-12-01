class Collection {
  static of (a) {
    const asArray = Array.isArray(a) ? a : [a]
    
    return asArray.filter(x => x != null)
  }
}

class DeepRenderer {
  static render (descriptors) {
    if (descriptors == null) return null

    return {
      type: descriptors.type,
      children: Collection.of(DeepRenderer.render(descriptors.props.children)),
      begits: []
    }
  }
}

module.exports = DeepRenderer
