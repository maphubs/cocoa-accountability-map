// @flow
import React, { useEffect, useState } from 'react'
import buildMapStyle from '../utils/build-map-style'
import { AlertGrid } from '../layers'
import { Button, Row, Col } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('./Map'), {
  ssr: false
})

const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const minMonth = 1
const maxMonth = 7

export default function AlertMap ({t, mapLayers}: {t: Function, mapLayers: Array<Object>}) {
  const [glStyle, setGlStyle] = useState()
  const [alertGridLayer, setAlertGridLayer] = useState(AlertGrid(20, 7))
  const [year, setYear] = useState(20)
  const [month, setMonth] = useState(7)
  useEffect(() => {
    const alertGridUpdated = AlertGrid(year, month)
    setAlertGridLayer(alertGridUpdated)
    setGlStyle(buildMapStyle([alertGridUpdated]))
  }, [month, year])

  return (
    <Map
      id='cam-alert-map'
      title={{en: 'Alerts'}}
      registerType='REGISTER_ALERT_MAP_COMPONENT'
      t={t}
      baseMap='satellite-streets'
      mapLayers={[alertGridLayer]}
      glStyle={glStyle}
    >
      <div style={{position: 'absolute', top: '5px', left: '50%'}}>
        <Row justify='center' align='middle' style={{width: '200px', padding: '5px', backgroundColor: 'rgba(255,255,255,0.5)'}}>
          <Col span={4}>
            <Button
              disabled={month <= minMonth}
              icon={<LeftOutlined />} onClick={() => {
                setMonth(month - 1)
              }}
            />
          </Col>
          <Col span={16} style={{textAlign: 'center'}}>
            <span style={{marginLeft: '5px', marginRight: '5px', fontSize: '16px', fontWeight: '600'}}>
              {monthNamesEn[month - 1]}, 20{year}
            </span>
          </Col>
          <Col span={4}>
            <Button
              disabled={month >= maxMonth}
              icon={<RightOutlined />} onClick={() => {
                setMonth(month + 1)
              }}
            />
          </Col>
        </Row>
      </div>
    </Map>
  )
}
