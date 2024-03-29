export default {
  layer_id: 5,
  shortid: '86FUZmImZ',
  name: {
    en: 'Land Cover',
    fr: 'Land Cover'
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
      'omh-86FUZmImZ': {
        type: 'raster',
        minzoom: 1,
        maxzoom: 14,
        tiles: [
          'https://tiles-maphubs.b-cdn.net/tiles/gtu/dbf5373a-dd4b-447a-890b-ce9757c003d6/{z}/{x}/{y}.png'
        ],
        tileSize: 256,
        metadata: {
          'maphubs:type': 'raster',
          'maphubs:minzoom': 1,
          'maphubs:maxzoom': 14,
          'maphubs:tiles': [
            'https://tiles-maphubs.b-cdn.net/tiles/gtu/dbf5373a-dd4b-447a-890b-ce9757c003d6/{z}/{x}/{y}.png'
          ],
          'maphubs:presets': null
        }
      }
    },
    layers: [
      {
        id: 'omh-raster-86FUZmImZ',
        type: 'raster',
        metadata: {
          'maphubs:layer_id': 5987,
          'maphubs:globalid': '86FUZmImZ'
        },
        source: 'omh-86FUZmImZ',
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
<h3>{NAME}</h3>
<style scoped>
    .block-cdi-landcover {
        width: 15px !important;
        height: 10px !important;
    }
    .legend-labels {
      padding-left: 0px;
      list-style-type: none;
      columns: 2;
    }
    .legend-labels p {
        margin-bottom: 0;
        line-height: 10px;
    }
</style>
<div class="legend-scale clearfix">
    <ul class="legend-labels" style="font-size: 8px;">
        <li class="clearfix"><span class="block block-cdi-landcover" style="background-color: rgb(242, 243, 159);"></span><p data-l10n-id="rubber">Rubber</p></li>
        <li class="clearfix"><span class="block block-cdi-landcover" style="background-color: rgb(20, 111, 17);"></span><p data-l10n-id="closed-forest">Protected Forest</p></li>
        <li class="clearfix"><span class="block block-cdi-landcover" style="background-color: rgb(251, 154, 119);"></span><p data-l10n-id="palm-oil">Palm oil</p></li>  
        <li class="clearfix"><span class="block block-cdi-landcover" style="background-color: rgb(137, 137, 137);"></span><p data-l10n-id="settlement">Settlement</p></li>
        <li class="clearfix"><span class="block block-cdi-landcover" style="background-color: rgb(201, 121, 30);"></span><p data-l10n-id="coconut">Cashew</p></li>
        <li class="clearfix"><span class="block block-cdi-landcover" style="background-color: rgb(17, 91, 201);"></span><p data-l10n-id="water">Water</p></li>
        <li class="clearfix"><span class="block block-cdi-landcover" style="background-color: rgb(237, 72, 97);"></span><p data-l10n-id="cultivated">Agriculture Industrial </p></li>
    </ul>
</div>
</div>`
}
