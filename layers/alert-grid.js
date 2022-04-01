const getLayer = (year, month, maxMonth) => {
  const API_URL = process.env.NEXT_PUBLIC_CAM_API_URL
  const version = `20${year}-${maxMonth}` // used to defeat cache when updating the data
  return {
    layer_id: 2,
    shortid: 'alert-grid',
    name: {
      en: 'Forest Disturbances',
      fr: 'Forest Disturbances'
    },
    description: {
      en: 'Forest Disturbances',
      fr: 'Forest Disturbances'
    },
    source: {
      en: 'Vivid Economics, Mighty Earth',
      fr: 'Vivid Economics, Mighty Earth'
    },
    style: {
      version: 8,
      sources: {
        'alert-grid-l4': {
          type: 'vector',
          tiles: [`${API_URL}/api/mvt/L4/${version}/{z}/{x}/{y}.pbf`],
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
          type: 'vector',
          tiles: [`${API_URL}/api/mvt/L5/${version}/{z}/{x}/{y}.pbf`],
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
        'alert-disturbance-area': {
          type: 'vector',
          tiles: [`${API_URL}/api/mvt/ews/${year}/${month}/{z}/{x}/{y}.pbf`],
          metadata: {
            'maphubs:presets': []
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
          'source-layer': 'data',
          maxzoom: 7,
          paint: {
            'fill-color': [
              'interpolate',
              ['linear'],
              ['get', `20${year}-${month}`],
              0,
              'rgb(254,229,217)',
              25,
              'rgb(252,187,161)',
              50,
              'rgb(252,146,114)',
              100,
              'rgb(251,106,74)',
              250,
              'rgb(222,45,38)',
              500,
              'rgb(165,15,21)'
            ],
            'fill-opacity': 0.5
          },
          filter: ['>', `20${year}-${month}`, 0],
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
          'source-layer': 'data',
          maxzoom: 7,
          paint: {
            'line-color': 'rgba(0,0,0,0.75)',
            'line-opacity': 0.5,
            'line-width': 0.5
          },
          layout: {
            visibility: 'none'
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
          'source-layer': 'data',
          minzoom: 7,
          maxzoom: 12,
          paint: {
            'fill-color': [
              'interpolate',
              ['linear'],
              ['get', `20${year}-${month}`],
              0,
              'rgb(254,229,217)',
              25,
              'rgb(252,187,161)',
              50,
              'rgb(252,146,114)',
              100,
              'rgb(251,106,74)',
              250,
              'rgb(222,45,38)',
              500,
              'rgb(165,15,21)'
            ],
            'fill-opacity': 0.5
          },
          filter: ['>', `20${year}-${month}`, 0],
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
          'source-layer': 'data',
          minzoom: 7,
          maxzoom: 12,
          paint: {
            'line-color': 'rgba(0,0,0,0.75)',
            'line-opacity': 0.5,
            'line-width': 0.5
          },
          layout: {
            visibility: 'none'
          }
        },
        {
          id: 'alert-disturbance-fill',
          type: 'fill',
          metadata: {
            'maphubs:layer_id': 3,
            'maphubs:globalid': 'alert-disturbance-outline',
            'maphubs:outline-only': false,
            'maphubs:showBehindBaseMapLabels': false
          },
          source: 'alert-disturbance-area',
          'source-layer': 'data',
          minzoom: 11,
          paint: {
            'fill-color': 'rgba(255,0,0,0.5)'
          },
          layout: {
            visibility: 'visible'
          }
        },
        {
          id: 'alert-disturbance-outline',
          type: 'line',
          metadata: {
            'maphubs:layer_id': 3,
            'maphubs:globalid': 'alert-disturbance-outline',
            'maphubs:outline-only': false,
            'maphubs:showBehindBaseMapLabels': false
          },
          source: 'alert-disturbance-area',
          'source-layer': 'data',
          minzoom: 11,
          paint: {
            'line-color': 'rgba(0,0,0,1)',
            'line-opacity': 0.5,
            'line-width': 0.5
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
<div class='omh-legend'>
  <style scoped>
    .legend-row {
      height: 12px;
      overflow: hidden;
    }
    .legend-color {
      width: 10px;
      height: 10px; 
      float: left;
    }
    .legend-label {
      font-size:8px;
      line-height: 12px;
      margin: 0px 0px 0px 20px;
    }
  </style>
  <h3 style='margin-bottom: 5px;'>{NAME}</h3>
  <div class='legend-row'>
      <div class='legend-color' style='background-color: rgba(254,229,217, 0.5);'></div>
      <p class='legend-label'>0-25 ha</p>
  </div>
  <div class='legend-row'>
      <div class='legend-color' style='background-color: rgba(252,187,161, 0.5);'></div>
      <p class='legend-label'>25-50 ha</p>
  </div>
  <div class='legend-row'>
      <div class='legend-color' style='background-color: rgba(252,146,114, 0.5);'></div>
      <p class='legend-label'>50-100 ha</p>
  </div>
  <div class='legend-row'>
      <div class='legend-color' style='background-color: rgba(251,106,74, 0.5);'></div>
      <p class='legend-label'>100-250 ha</p>
  </div>
  <div class='legend-row'>
      <div class='legend-color' style='background-color: rgba(222,45,38, 0.5);'></div>
      <p class='legend-label'>250-500 ha</p>
  </div>
  <div class='legend-row'>
      <div class='legend-color' style='background-color: rgba(165,15,21, 0.5);'></div>
      <p class='legend-label'>500+ ha</p>
  </div>
  <h3 style='margin-bottom: 5px;'>Disturbance Area</h3>
  <div class='legend-row'>
      <div class='block' style='width: 10px; height: 10px; background-color: #FF0000;'></div>
       <p class='legend-label'>(zoom in to see detailed disturbances)</p>
  </div>
</div>
`
  }
}
export default getLayer
