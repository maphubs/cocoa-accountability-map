export default {
  layer_id: 4,
  shortid: 'mPmvOyV7M',
  name: {
    en: 'Classified Forests',
    fr: 'Classified Forests'
  },
  description: {
    en: 'Classified Forests',
    fr: 'Classified Forests'
  },
  source: {
    en: 'MINEF',
    fr: 'MINEF'
  },
  style: {
    version: 8,
    sources: {
      'omh-mPmvOyV7M': {
        type: 'vector',
        url: 'https://mighty.maphubs.com/api/lyr/mPmvOyV7M/tile.json',
        metadata: {
          'maphubs:presets': [
            {
              tag: 'Region',
              label: 'Region',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Region',
              id: 1
            },
            {
              tag: 'cate',
              label: 'cate',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'cate',
              id: 2
            },
            {
              tag: 'nom',
              label: 'nom',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'nom',
              id: 3
            },
            {
              tag: 'aire',
              label: 'aire',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'aire',
              id: 4
            }
          ]
        }
      }
    },
    layers: [
      {
        id: 'omh-data-polygon-4911-mPmvOyV7M',
        type: 'fill',
        metadata: {
          'maphubs:layer_id': 4911,
          'maphubs:globalid': 'mPmvOyV7M',
          'maphubs:interactive': true,
          'maphubs:showBehindBaseMapLabels': true
        },
        source: 'omh-mPmvOyV7M',
        'source-layer': 'data',
        filter: [
          'in',
          '$type',
          'Polygon'
        ],
        paint: {
          'fill-color': 'rgba(104,159,56,0.65)',
          'fill-outline-color': 'rgba(104,159,56,0.65)',
          'fill-opacity': 0.5
        },
        layout: {
          visibility: 'visible'
        }
      },
      {
        id: 'omh-data-doublestroke-polygon--4911-mPmvOyV7M',
        type: 'line',
        metadata: {
          'maphubs:layer_id': 4911,
          'maphubs:globalid': 'mPmvOyV7M',
          'maphubs:showBehindBaseMapLabels': true
        },
        source: 'omh-mPmvOyV7M',
        'source-layer': 'data',
        filter: [
          'in',
          '$type',
          'Polygon'
        ],
        paint: {
          'line-color': 'rgba(104,159,56,0.65)',
          'line-opacity': 0.3,
          'line-width': {
            base: 0.5,
            stops: [
              [
                5,
                1
              ],
              [
                6,
                2
              ],
              [
                7,
                3
              ],
              [
                8,
                4
              ],
              [
                9,
                5
              ],
              [
                10,
                6
              ]
            ]
          },
          'line-offset': {
            base: 0.5,
            stops: [
              [
                5,
                0.5
              ],
              [
                6,
                1
              ],
              [
                7,
                1.5
              ],
              [
                8,
                2
              ],
              [
                9,
                2.5
              ],
              [
                10,
                3
              ]
            ]
          }
        },
        layout: {
          visibility: 'visible'
        }
      },
      {
        id: 'omh-data-outline-polygon-4911-mPmvOyV7M',
        type: 'line',
        metadata: {
          'maphubs:layer_id': 4911,
          'maphubs:globalid': 'mPmvOyV7M',
          'maphubs:showBehindBaseMapLabels': true
        },
        source: 'omh-mPmvOyV7M',
        'source-layer': 'data',
        filter: [
          'in',
          '$type',
          'Polygon'
        ],
        paint: {
          'line-color': '#222222',
          'line-opacity': 0.8,
          'line-width': {
            base: 0.5,
            stops: [
              [
                3,
                0.1
              ],
              [
                4,
                0.2
              ],
              [
                5,
                0.3
              ],
              [
                6,
                0.4
              ],
              [
                7,
                0.5
              ],
              [
                8,
                0.6
              ],
              [
                9,
                0.7
              ],
              [
                10,
                0.8
              ]
            ]
          }
        },
        layout: {
          visibility: 'visible'
        }
      },
      {
        id: 'omh-hover-polygon-4911-mPmvOyV7M',
        type: 'fill',
        metadata: {
          'maphubs:layer_id': 4911,
          'maphubs:globalid': 'mPmvOyV7M',
          'maphubs:showBehindBaseMapLabels': true
        },
        source: 'omh-mPmvOyV7M',
        'source-layer': 'data',
        filter: [
          '==',
          'mhid',
          ''
        ],
        paint: {
          'fill-color': 'yellow',
          'fill-outline-color': 'black',
          'fill-opacity': 0.7
        },
        layout: {
          visibility: 'visible'
        }
      }
    ],
    metadata: {
      'maphubs:color': 'rgba(104,159,56,0.65)',
      'maphubs:active': true
    }
  },
  legend_html: `
<div class="omh-legend">
 <div class="block double-stroke" style="background-color: rgba(104,159,56,0.65)">
 </div>
 <h3>{NAME}</h3>
 </div>
`
}
