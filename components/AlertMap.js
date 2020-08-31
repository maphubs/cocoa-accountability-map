// @flow
import React, { useEffect, useState } from 'react'
import buildMapStyle from '../utils/build-map-style'
import { AlertGrid } from '../layers'
import l4gridData from '../data/l4grid.json'
import l5gridData from '../data/l5grid.json'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('./Map'), {
  ssr: false
})

AlertGrid.style.sources['alert-grid-l4'].data = l4gridData
AlertGrid.style.sources['alert-grid-l5'].data = l5gridData

export default function AlertMap ({t, mapLayers}: {t: Function, mapLayers: Array<Object>}) {
  const [glStyle, setGlStyle] = useState()
  useEffect(() => {
    setGlStyle(buildMapStyle([AlertGrid, ...mapLayers]))
  }, [mapLayers])
  return (
    <Map
      id='cam-alert-map'
      title={{en: 'Alerts'}}
      registerType='REGISTER_ALERT_MAP_COMPONENT'
      t={t}
      baseMap='default'
      mapLayers={[AlertGrid, ...mapLayers]}
      glStyle={glStyle}
    />
  )
}
