// @flow
import React, {useState, useEffect} from 'react'
import { Row, Input, List, Empty } from 'antd'
import lunr from 'lunr'
import turfBuffer from '@turf/buffer'
import turfbbox from '@turf/bbox'
import { useSelector, useDispatch } from 'react-redux'

import type {Node} from 'React'

const { Search } = Input

type Props = {
  t: Function,
  coops: Array<Object>
}

let idx
const coopMap = {}
let coopBBox

export default function COOPs ({t, coops}: Props): Node {
  const [searchQuery, setSearchQuery] = useState()

  const primaryMapState = useSelector(state => state.cam.primaryMapState)
  const searchResults = useSelector(state => state.cam.searchResults)
  const dispatch = useDispatch()

  useEffect(() => {
    idx = lunr(function () {
      this.field('name')
      this.field('acronym')
      this.field('source')
      this.field('vicinity')
      this.field('nearestpa')

      coops.forEach((coop) => {
        coopMap[coop.properties.id] = coop
        const dataToIndex = {
          name: coop.properties['Name of Cooperative'],
          acronym: coop.properties['Coop Acronym'],
          source: coop.properties.Source,
          vicinity: coop.properties.Vicinity,
          nearestpa: coop.properties['Nearest PA'],
          id: coop.properties.id
        }
        console.log(dataToIndex)
        this.add(dataToIndex)
      })
      coopBBox = turfbbox({
        type: 'FeatureCollection',
        features: coops
      })
    })
  }, [coops])

  const onSearch = (val) => {
    if (!val) {
      // clearing search
      dispatch({type: 'SET_SEARCH_RESULTS', searchResults: []})
      if (coopBBox && primaryMapState?.state?.map?.map) {
        primaryMapState.state.map.map.fitBounds(coopBBox, {padding: 25, curve: 3, speed: 0.6, maxZoom: 10, animate: true})
      }
      return
    }
    console.log(`searching for ${val}`)
    const results = idx.search(val)
    const coopSearchResults = results.map(r => coopMap[r.ref])
    console.log(coopSearchResults)
    dispatch({type: 'SET_SEARCH_RESULTS', searchResults: coopSearchResults})
  }

  return (
    <>
      <Row style={{padding: '10px', height: '100%', width: '100%'}}>
        <Search placeholder='Search' onSearch={onSearch} allowClear />
        <div style={{height: '100%', width: '100%', marginTop: '5px'}}>
          {(searchResults.length > 0) &&
            <>
              <span>{searchResults.length} {t('Result(s) Found')}</span>
              <div style={{height: 'calc(100% - 50px)', overflowY: 'auto'}}>
                <List
                  size='small'
                  bordered
                  dataSource={searchResults}
                  renderItem={coop => (
                    <List.Item>
                      <Row
                        style={{position: 'relative', cursor: 'zoom-in'}} onClick={() => {
                          const feature = turfBuffer(coop.geometry, 5)
                          const bbox = turfbbox(feature)
                          if (bbox && primaryMapState?.state?.map?.map) {
                            primaryMapState.state.map.map.fitBounds(bbox, {padding: 25, curve: 3, speed: 0.6, maxZoom: 15, animate: true})
                          }
                        }}
                      >
                        <div style={{top: '2px', left: 0, fontSize: '12px', fontWeight: '600', width: '100%'}}>{coop.properties['Coop Acronym']}</div>
                        <div style={{bottom: '2px', left: 0, fontSize: '9px'}}>{coop.properties['Name of Cooperative']}</div>
                      </Row>
                    </List.Item>
                  )}
                />
              </div>
            </>}
          {(searchResults.length === 0)  &&
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t('Search Cooperatives')} />}
        </div>
      </Row>
    </>
  )
}
