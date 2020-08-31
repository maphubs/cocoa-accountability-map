// @flow
import React from 'react'
import { Provider } from 'unstated'
import { connect } from 'react-redux'

import {InteractiveMap, MapContainer, BaseMapContainer} from '@bit/kriscarle.maphubs-components.components.map'

type Props = {
  id: string,
  t: Function,
  glStyle?: Object,
  mapLayers?: Array<Object>,
  baseMap?: string,
  title?: Object,
  registerType: string,
  dispatch: Function
}

class MapHubsMap extends React.Component<Props, void> {
  constructor (props: Props) {
    super(props)
    if (typeof window !== 'undefined') {
      this.MapState = new MapContainer()
      this.BaseMap = new BaseMapContainer({
        baseMap: props.baseMap || 'streets',
        bingKey: process.env.NEXT_PUBLIC_BING_KEY,
        mapboxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
      })
    }
  }

  MapState: any
  mapComponent: any
  BaseMap: any

  componentDidMount () {
    const {id, registerType, dispatch} = this.props
    console.log(`Registering MapComponent: ${id}`)
    dispatch({
      type: registerType,
      mapComponent: this.mapComponent,
      mapState: this.MapState
    })
  }

  render () {
    const { id, t, glStyle, mapLayers, title } = this.props

    return (
      <div style={{ height: '100%' }}>
        <style jsx global>{`
            .collapsible {
              padding-left: 0px;
              list-style-type: none;
            }
            .collapsible-header {
              padding: 0 !important;
            }
            .omh-legend{padding-left:2px;padding-right:2px;padding-top:2px;padding-bottom:4px;min-height:20px;}
            .omh-legend h3{font-size:10px;color:#212121;margin:0px;}
            .base-map-legend *{color:#212121 !important;}
            .omh-legend .block{height:15px;width:20px;float:left;margin-right:5px;border:1px solid #888;}
            .omh-legend .point{height:15px;width:15px;float:left;margin-right:5px;border-radius:50%;border:1px solid #888;}
            .omh-legend .double-stroke{box-shadow:inset 0 0 0 3px rgba(100,100,100,0.2);}
            .word-wrap{overflow-wrap:break-word;-ms-word-break:break-all;word-break:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;}

            .mapboxgl-ctrl-logo {
            position: absolute !important;
            bottom: -5px !important;
            left: 80px !important;
            }

            .maphubs-inset .mapboxgl-ctrl-logo {
              display: none;
            }

            .compare-swiper-vertical {
              background-color: #42B532 !important;
            }

            .mapboxgl-canvas{left:0 !important;}
            
            .mapboxgl-popup{z-index:200 !important;height:200px;width:150px;}
            .mapboxgl-popup-content{padding:0 !important;}
            .mapboxgl-popup-close-button{top:-7px !important;right:-7px !important;z-index:201 !important;background-color:rgba(255,255,255,0.75) !important;color:black !important;border-radius:25px !important;border:1px solid black !important;width:14px !important;height:14px !important;line-height:5px !important;padding-bottom:1px !important;padding-top:0px !important;padding-left:0.5px !important;padding-right:0px !important;}
            .maphubs-feature-popup{padding:0;}
            .mapbox-gl-draw_point,.mapbox-gl-draw_line,.mapbox-gl-draw_polygon{border-bottom:none !important;border-right:1px #ddd solid !important;}
            .mapboxgl-ctrl-top-right{top:40px !important;}
            .maphubs-ctrl-scale{border:none !important;padding:0 !important;background-color:inherit !important;position:relative;height:22px;position:absolute;bottom:5px;right:5px;height:34px;margin:0px !important;}
            .map-position{height:12px;position:absolute;top:0;right:0;background-color:rgba(255,255,255,0.55);font-size:10px;line-height:10px;text-align:center;box-shadow:none !important;color:#333;}
            .metric-scale{height:12px;font-size:10px;line-height:10px;text-align:center;box-shadow:none !important;background-color:rgba(255,255,255,0.55);border-width:medium 2px 2px;border-style:none solid solid;border-color:#333;padding:0 5px;color:#333;position:absolute;top:12px;right:0;}
            .imperial-scale{height:12px;font-size:10px;line-height:10px;text-align:center;box-shadow:none !important;background-color:rgba(255,255,255,0.55);border-width:medium 2px 2px;border-style:solid solid none;border-color:#333;padding:0 5px;color:#333;position:absolute;bottom:0;right:0;}
          `}
        </style>
        <Provider inject={[this.MapState, this.BaseMap]}>
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <InteractiveMap
              ref={(el) => { this.mapComponent = el }}
              map_id={id}
              height='100%'
              fitBounds={[
                -8.96484375,
                4.017699464336852,
                -2.04345703125,
                11.15684527521178
              ]}
              style={glStyle}
              layers={mapLayers}
              showTitle={title}
              title={title}
              showLegendLayersButton={false}
              showLayerVisibility={false}
              showLayerInfo={false}
              showShareButtons={false}
              t={t}
              hideInactive
              insetMap={false}
              showLogo
              hash={false}
              primaryColor='#4EA775'
              logoSmall='https://hpvhe47439ygwrt.belugacdn.link/maphubs/assets/maphubs-logo-small.png'
              logoSmallHeight={19}
              logoSmallWidth={70}
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              locale='en'
            />
          </div>
        </Provider>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(MapHubsMap)
