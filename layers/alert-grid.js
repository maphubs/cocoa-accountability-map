export default {
  layer_id: 2,
  shortid: 'alert-grid',
  name: {
    en: 'Alert Grid',
    fr: 'Alert Grid'
  },
  description: {
    en: 'Alert Grid',
    fr: 'Alert Grid'
  },
  source: {
    en: 'Vivid Economics, Mighty Earth',
    fr: 'Vivid Economics, Mighty Earth'
  },
  style: {
    version: 8,
    sources: {
      'alert-grid-l4': {
        type: 'geojson',
        data: {},
        metadata: {
          'maphubs:presets': [
            {
              tag: 'val',
              label: 'Alert Area',
              type: 'number',
              isRequired: false,
              showOnMap: true,
              mapTo: 'val',
              id: 1
            }
          ]
        }
      },
      'alert-grid-l5': {
        type: 'geojson',
        data: {},
        metadata: {
          'maphubs:presets': [
            {
              tag: 'val',
              label: 'Alert Area',
              type: 'number',
              isRequired: false,
              showOnMap: true,
              mapTo: 'val',
              id: 1
            }
          ]
        }
      }
    },
    layers: [
      {
        id: 'alert-grid-l4-fill',
        type: 'fill',
        metadata: {
          'maphubs:layer_id': 2,
          'maphubs:globalid': 'alert-grid',
          'maphubs:interactive': true,
          'maphubs:showBehindBaseMapLabels': true,
          'maphubs:outline-only': false
        },
        source: 'alert-grid-l4',
        paint: {
          'fill-color': 'rgba(255,255,255,1)',
          'fill-opacity': 0
        },
        layout: {
          visibility: 'visible'
        }
      },
      {
        id: 'alert-grid-l4-outline',
        type: 'line',
        metadata: {
          'maphubs:layer_id': 2,
          'maphubs:globalid': 'alert-grid',
          'maphubs:outline-only': false,
          'maphubs:showBehindBaseMapLabels': false
        },
        source: 'alert-grid-l4',
        paint: {
          'line-color': 'rgba(255,0,0,0.75)',
          'line-opacity': 1,
          'line-width': 2
        },
        layout: {
          visibility: 'visible'
        }
      },
      {
        id: 'alert-grid-l5-fill',
        type: 'fill',
        metadata: {
          'maphubs:layer_id': 2,
          'maphubs:globalid': 'alert-grid',
          'maphubs:interactive': true,
          'maphubs:showBehindBaseMapLabels': true,
          'maphubs:outline-only': false
        },
        source: 'alert-grid-l5',
        paint: {
          'fill-color': 'rgba(255,255,255,1)',
          'fill-opacity': 0
        },
        layout: {
          visibility: 'visible'
        }
      },
      {
        id: 'alert-grid-l5-outline',
        type: 'line',
        metadata: {
          'maphubs:layer_id': 2,
          'maphubs:globalid': 'alert-grid',
          'maphubs:outline-only': false,
          'maphubs:showBehindBaseMapLabels': false
        },
        source: 'alert-grid-l5',
        paint: {
          'line-color': 'rgba(0,0,255,0.75)',
          'line-opacity': 1,
          'line-width': 1
        },
        layout: {
          visibility: 'visible'
        }
      }
    ],
    metadata: {
      'maphubs:active': true
    }
  },
  legend_html: `
<div class="omh-legend">
 <div class="block double-stroke" style="background-color: rgba(255,0,0,0.75)">
 </div>
 <h3>{NAME}</h3>
 </div>
`
}
