export default {
  layer_id: 3,
  shortid: 'bsKjfZCcR',
  name: {
    en: 'Protected Areas',
    fr: 'Protected Areas'
  },
  description: {
    en: 'Côte d\'Ivoire Protected Areas (forest stats v2)',
    fr: 'Côte d\'Ivoire Protected Areas (forest stats v2)'
  },
  source: {
    en: 'MINEF, Vivid Economics, Hansen/UMD',
    fr: 'MINEF, Vivid Economics, Hansen/UMD'
  },
  style: {
    version: 8,
    sources: {
      'omh-bsKjfZCcR': {
        type: 'vector',
        url: 'https://mighty.maphubs.com/api/lyr/bsKjfZCcR/tile.json',
        metadata: {
          'maphubs:presets': [
            {
              tag: 'fid',
              label: 'fid',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'fid',
              id: 1
            },
            {
              tag: 'nom',
              label: 'nom',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'nom',
              id: 2
            },
            {
              tag: 'aoi_id',
              label: 'aoi_id',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'aoi_id',
              id: 3
            },
            {
              tag: 'Tree Cover Loss 2018',
              label: 'Tree Cover Loss 2018',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Tree Cover Loss 2018',
              id: 4
            },
            {
              tag: 'Disturbance since Nov. 2017',
              label: 'Disturbance since Nov. 2017',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Disturbance since Nov. 2017',
              id: 5
            }
          ]
        }
      }
    },
    layers: [
      {
        id: 'omh-data-polygon-4823-bsKjfZCcR',
        type: 'fill',
        metadata: {
          'maphubs:layer_id': 4823,
          'maphubs:globalid': 'bsKjfZCcR',
          'maphubs:interactive': true,
          'maphubs:showBehindBaseMapLabels': true,
          'maphubs:outline-only': false
        },
        source: 'omh-bsKjfZCcR',
        'source-layer': 'data',
        filter: [
          'in',
          '$type',
          'Polygon'
        ],
        paint: {
          'fill-color': 'rgba(129,199,132,0.65)',
          'fill-outline-color': 'rgba(129,199,132,0.65)',
          'fill-opacity': 0.7
        },
        layout: {
          visibility: 'visible'
        }
      },
      {
        id: 'omh-data-doublestroke-polygon--4823-bsKjfZCcR',
        type: 'line',
        metadata: {
          'maphubs:layer_id': 4823,
          'maphubs:globalid': 'bsKjfZCcR',
          'maphubs:outline-only': false,
          'maphubs:showBehindBaseMapLabels': true
        },
        source: 'omh-bsKjfZCcR',
        'source-layer': 'data',
        filter: [
          'in',
          '$type',
          'Polygon'
        ],
        paint: {
          'line-color': 'rgba(129,199,132,0.65)',
          'line-opacity': 0.9,
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
        id: 'omh-data-outline-polygon-4823-bsKjfZCcR',
        type: 'line',
        metadata: {
          'maphubs:layer_id': 4823,
          'maphubs:globalid': 'bsKjfZCcR',
          'maphubs:outline-only': false,
          'maphubs:showBehindBaseMapLabels': true
        },
        source: 'omh-bsKjfZCcR',
        'source-layer': 'data',
        filter: [
          'in',
          '$type',
          'Polygon'
        ],
        paint: {
          'line-color': '#222222',
          'line-opacity': 1,
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
        id: 'omh-hover-polygon-4823-bsKjfZCcR',
        type: 'fill',
        metadata: {
          'maphubs:layer_id': 4823,
          'maphubs:globalid': 'bsKjfZCcR',
          'maphubs:outline-only': false,
          'maphubs:showBehindBaseMapLabels': true
        },
        source: 'omh-bsKjfZCcR',
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
      'maphubs:color': 'rgba(129,199,132,0.65)',
      'maphubs:active': true
    }
  },
  legend_html: `
<div class="omh-legend">
 <div class="block double-stroke" style="background-color: rgba(129,199,132,0.65)">
 </div>
 <h3>{NAME}</h3>
 </div>
`
}
