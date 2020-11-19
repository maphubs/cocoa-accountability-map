// @flow
const coopsData = require('../data/coops-20201118.json')
coopsData.features.forEach((feature, i) => {
  if (!feature.properties.id) feature.properties.id = i
})

const coopsLayer = {
  layer_id: 1,
  shortid: 'JmTgPfvLk',
  name: {
    en: 'Cocoa Cooperatives',
    fr: 'Cocoa Cooperatives'
  },
  description: {
    en: 'Jan 14 2020 Update',
    fr: 'Jan 14 2020 Update'
  },
  source: {
    en: 'Mighty Earth and Contributors',
    fr: 'Mighty Earth and Contributors'
  },
  style: {
    version: 8,
    sources: {
      coops: {
        type: 'geojson',
        data: coopsData,
        metadata: {
          'maphubs:presets': [
            {
              tag: 'Name of Cooperative',
              label: 'Name of Cooperative',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Name of Cooperative',
              id: 1
            },
            {
              tag: 'Source',
              label: 'Source',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Source',
              id: 2
            },
            {
              tag: 'Town or Village',
              label: 'Town or Village',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Town or Village',
              id: 3
            },
            {
              tag: 'Coop Acronym',
              label: 'Coop Acronym',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Coop Acronym',
              id: 4
            },
            {
              tag: 'Buyers',
              label: 'Buyers',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Buyers',
              id: 5
            },
            {
              tag: 'Date',
              label: 'Date',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Date',
              id: 6
            },
            {
              tag: 'coops',
              label: 'coops',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'coops',
              id: 7
            },
            {
              tag: '# of Members',
              label: '# of Members',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: '# of Members',
              id: 8
            },
            {
              tag: 'Vicinity',
              label: 'Vicinity',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Vicinity',
              id: 9
            },
            {
              tag: 'Area cultivated (ha)',
              label: 'Area cultivated (ha)',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Area cultivated (ha)',
              id: 10
            },
            {
              tag: 'Contact Name',
              label: 'Contact Name',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Contact Name',
              id: 11
            },
            {
              tag: 'Contact Information',
              label: 'Contact Information',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Contact Information',
              id: 12
            },
            {
              tag: 'Certification',
              label: 'Certification',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Certification',
              id: 13
            },
            {
              tag: 'Coop Registration Number',
              label: 'Coop Registration Number',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Coop Registration Number',
              id: 14
            },
            {
              tag: 'Distance from PA',
              label: 'Distance from PA',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Distance from PA',
              id: 15
            },
            {
              tag: 'Nearest PA',
              label: 'Nearest PA',
              type: 'text',
              isRequired: false,
              showOnMap: true,
              mapTo: 'Nearest PA',
              id: 16
            }
          ]
        }
      }
    },
    layers: [
      {
        id: 'omh-markers-coops-small',
        type: 'symbol',
        metadata: {
          'maphubs:interactive': true
        },
        maxzoom: 8,
        source: 'coops',
        layout: {
          'icon-image': 'marker-icon-MlQjegnHjy',
          'icon-size': 0.45,
          'icon-allow-overlap': true,
          'icon-offset': [
            0,
            -16
          ],
          visibility: 'visible'
        }
      },
      {
        id: 'omh-markers-coops-large',
        type: 'symbol',
        minzoom: 8,
        metadata: {
          'maphubs:interactive': true
        },
        source: 'coops',
        layout: {
          'icon-image': 'marker-icon-MlQjegnHjy-2',
          'icon-size': 0.45,
          'icon-allow-overlap': true,
          'icon-offset': [
            0,
            -24
          ],
          visibility: 'visible'
        }
      },
      {
        id: 'omh-data-point-coops-small',
        type: 'circle',
        maxzoom: 8,
        metadata: {
          'maphubs:layer_id': 5505,
          'maphubs:globalid': 'JmTgPfvLk',
          'maphubs:interactive': false,
          'maphubs:showBehindBaseMapLabels': false,
          'maphubs:markers': {
            shape: 'SQUARE_PIN',
            size: '16',
            width: 16,
            height: 16,
            shapeFill: 'white',
            shapeFillOpacity: 0.75,
            shapeStroke: 'rgba(93,64,55,0.92)',
            shapeStrokeWidth: 2,
            icon: 'maphubs-icon-farmer',
            iconFill: 'rgba(93,64,55,0.92)',
            iconFillOpacity: 1,
            iconStroke: '#323333',
            iconStrokeWidth: 0,
            inverted: true,
            enabled: true,
            version: 2,
            imageName: 'marker-icon-MlQjegnHjy'
          }
        },
        source: 'coops',
        paint: {
          'circle-color': 'rgba(93,64,55,0.92)',
          'circle-opacity': 1
        },
        layout: {
          visibility: 'none'
        }
      },
      {
        id: 'omh-data-point-coops-large',
        type: 'circle',
        minzoom: 8,
        metadata: {
          'maphubs:layer_id': 5505,
          'maphubs:globalid': 'JmTgPfvLk',
          'maphubs:interactive': false,
          'maphubs:showBehindBaseMapLabels': false,
          'maphubs:markers': {
            shape: 'SQUARE_PIN',
            size: '24',
            width: 24,
            height: 24,
            shapeFill: 'white',
            shapeFillOpacity: 0.75,
            shapeStroke: 'rgba(93,64,55,0.92)',
            shapeStrokeWidth: 2,
            icon: 'maphubs-icon-farmer',
            iconFill: 'rgba(93,64,55,0.92)',
            iconFillOpacity: 1,
            iconStroke: '#323333',
            iconStrokeWidth: 0,
            inverted: true,
            enabled: true,
            version: 2,
            imageName: 'marker-icon-MlQjegnHjy-2'
          }
        },
        source: 'coops',
        paint: {
          'circle-color': 'rgba(93,64,55,0.92)',
          'circle-opacity': 1
        },
        layout: {
          visibility: 'none'
        }
      },
      {
        id: 'omh-hover-point-5505-JmTgPfvLk',
        type: 'circle',
        metadata: {
          'maphubs:layer_id': 5505,
          'maphubs:globalid': 'JmTgPfvLk'
        },
        source: 'coops',
        filter: [
          '==',
          'mhid',
          ''
        ],
        paint: {
          'circle-radius': 15,
          'circle-color': 'yellow',
          'circle-opacity': 0.5
        },
        layout: {
          visibility: 'none'
        }
      }
    ],
    metadata: {
      'maphubs:color': 'rgba(93,64,55,0.92)',
      'maphubs:active': true
    }
  },
  legend_html: `
  <div class="omh-legend">
 <div class="point" style="background-color: rgba(93,64,55,0.92)">
 </div>
 <h3>{NAME}</h3>
 </div>
  `
}

export { coopsData, coopsLayer }
