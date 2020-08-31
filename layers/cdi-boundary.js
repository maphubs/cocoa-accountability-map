export default {
  layer_id: 6,
  shortid: '70yhsguVQ',
  name: {
    en: 'Côte d’Ivoire',
    fr: 'Côte d’Ivoire'
  },
  description: {
    en: 'Côte d’Ivoire Boundary',
    fr: 'Côte d’Ivoire Boundary'
  },
  source: {
    en: 'OCHA ROWCA, NOAA',
    fr: 'OCHA ROWCA, NOAA'
  },
  style: {
    version: 8,
    sources: {
      'omh-70yhsguVQ': {
        type: 'vector',
        url: 'https://mighty.maphubs.com/api/lyr/70yhsguVQ/tile.json',
        metadata: {
          'maphubs:presets': [
            {
              tag: 'cdi',
              label: 'cdi',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'cdi',
              id: 1
            }
          ]
        }
      }
    },
    layers: [
      {
        id: 'omh-data-polygon-4733-70yhsguVQ',
        type: 'fill',
        metadata: {
          'maphubs:layer_id': 4733,
          'maphubs:globalid': '70yhsguVQ',
          'maphubs:interactive': false,
          'maphubs:showBehindBaseMapLabels': false
        },
        source: 'omh-70yhsguVQ',
        'source-layer': 'data',
        filter: [
          '==',
          'cdi',
          'no'
        ],
        paint: {
          'fill-color': '#D4D4D4',
          'fill-opacity': 0.75
        }
      },
      {
        id: 'omh-data-outline-polygon-4733-70yhsguVQ',
        type: 'line',
        metadata: {
          'maphubs:layer_id': 4733,
          'maphubs:globalid': '70yhsguVQ'
        },
        source: 'omh-70yhsguVQ',
        'source-layer': 'data',
        filter: [
          '==',
          'cdi',
          'yes'
        ],
        paint: {
          'line-color': '#222222',
          'line-opacity': 0.8,
          'line-width': {
            base: 1,
            stops: [
              [
                4,
                1
              ],
              [
                8,
                3
              ],
              [
                9,
                4
              ],
              [
                10,
                4
              ]
            ]
          }
        }
      },
      {
        id: 'omh-hover-polygon-4733-70yhsguVQ',
        type: 'fill',
        metadata: {
          'maphubs:layer_id': 4733,
          'maphubs:globalid': '70yhsguVQ'
        },
        source: 'omh-70yhsguVQ',
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
        }
      }
    ],
    metadata: {
      'maphubs:active': false
    }
  },
  legend_html: `
  <div class="omh-legend">
 <div class="block" style="border: 2px solid black;">
 </div>
 <h3>Cote d’Ivoire</h3>
 </div>
`
}
