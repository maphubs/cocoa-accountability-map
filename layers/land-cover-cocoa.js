export default {
  layer_id: 7,
  shortid: '86FUZmImZ2',
  name: {
    en: 'Cocoa',
    fr: 'Cocoa'
  },
  description: {
    en: 'RCI Land Cover v3, June 2020',
    fr: 'RCI Land Cover v3, June 2020'
  },
  source: {
    en: 'Vivid Economics',
    fr: 'Vivid Economics'
  },
  style: {
    sources: {
      'omh-86FUZmImZ2': {
        type: 'raster',
        minzoom: 1,
        maxzoom: 14,
        tiles: [
          'https://tiles-maphubs.b-cdn.net/tiles/gtu/7e36aa68-f317-450e-b395-577cf540aa44/{z}/{x}/{y}.png'
        ],
        tileSize: 256,
        metadata: {
          'maphubs:type': 'raster',
          'maphubs:minzoom': 1,
          'maphubs:maxzoom': 14,
          'maphubs:tiles': [
            'https://tiles-maphubs.b-cdn.net/tiles/gtu/7e36aa68-f317-450e-b395-577cf540aa44/{z}/{x}/{y}.png'
          ],
          'maphubs:presets': null
        }
      }
    },
    layers: [
      {
        id: 'omh-raster-86FUZmImZ2',
        type: 'raster',
        metadata: {
          'maphubs:layer_id': 5987,
          'maphubs:globalid': '86FUZmImZ2'
        },
        source: 'omh-86FUZmImZ2',
        minzoom: 0,
        maxzoom: 18,
        paint: {
          'raster-opacity': 1,
          'raster-resampling': 'nearest'
        }
      }
    ],
    metadata: {
      'maphubs:active': true
    }
  },
  legend_html: `
  <div class="omh-legend">
 <div class="block double-stroke" style="background-color: rgb(126, 77, 53)">
 </div>
 <h3>{NAME}</h3>
 </div>
`
}
