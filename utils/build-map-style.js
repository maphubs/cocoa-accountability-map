// @flow
import _forEachRight from 'lodash.foreachright'

const BuildMapStyle = (layers: Array<Object>): Object => {
  const mapStyle = {
    version: 8,
    sources: {},
    layers: []
  }

  // reverse the order for the styles, since the map draws them in the order recieved
  _forEachRight(layers, (layer: Object) => {
    const style = layer.style
    if (style && style.sources && style.layers) {
      // add source
      mapStyle.sources = Object.assign(mapStyle.sources, style.sources)
      // add layers
      mapStyle.layers = mapStyle.layers.concat(style.layers)
    }
  })
  return mapStyle
}
export default BuildMapStyle
