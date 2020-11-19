// @flow
import React, { useEffect, useState } from 'react'
import buildMapStyle from '../utils/build-map-style'
import dynamic from 'next/dynamic'
import type {Node} from 'React'
import { useSelector } from 'react-redux'

const Map = dynamic(() => import('./Map'), {
  ssr: false
})

export default function PrimaryMap ({t, mapLayers}: {t: Function, mapLayers: Array<Object>}): Node {
  const [glStyle, setGlStyle] = useState()
  const primaryMapState = useSelector(state => state.cam.primaryMapState)
  const searchResults = useSelector(state => state.cam.searchResults)

  useEffect(() => {
    let filter = ['in', '$type', 'Point']
    if (primaryMapState?.state?.map?.map) {
        const mapboxGLMap =primaryMapState.state.map.map
        if (searchResults.length > 0) {
          filter = ['in', 'id', ...searchResults.map(r => r.properties.id)]
        }
        mapboxGLMap.setFilter('omh-markers-coops-small', filter)
        mapboxGLMap.setFilter('omh-markers-coops-large', filter)
        mapboxGLMap.setFilter('omh-data-point-coops-small', filter)
        mapboxGLMap.setFilter('omh-data-point-coops-large', filter)
      }
  }, [searchResults])

  useEffect(() => {
    setGlStyle(buildMapStyle(mapLayers))
  }, [])

  return (
    <Map
      id='cam-primary-map'
      title={{en: 'Cooperatives'}}
      registerType='REGISTER_PRIMARY_MAP_COMPONENT'
      t={t} mapLayers={mapLayers} glStyle={glStyle}
    />
  )
}
