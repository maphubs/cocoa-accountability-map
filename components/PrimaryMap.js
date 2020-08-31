// @flow
import React, { useEffect, useState } from 'react'
import buildMapStyle from '../utils/build-map-style'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('./Map'), {
  ssr: false
})

export default function PrimaryMap ({t, mapLayers}: {t: Function, mapLayers: Array<Object>}) {
  const [glStyle, setGlStyle] = useState()
  useEffect(() => {
    setGlStyle(buildMapStyle(mapLayers))
  }, [mapLayers])

  return (
    <Map
      id='cam-primary-map'
      title={{en: 'Cooperatives'}}
      registerType='REGISTER_PRIMARY_MAP_COMPONENT'
      t={t} mapLayers={mapLayers} glStyle={glStyle}
    />
  )
}
