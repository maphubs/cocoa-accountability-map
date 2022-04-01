// @flow
import React, { useEffect, useState } from 'react'
import buildMapStyle from '../utils/build-map-style'
import { AlertGrid } from '../layers'
import { Button, Row, Col } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
import type { Node } from 'React'

const Map = dynamic(() => import('./Map'), {
  ssr: false
})

const monthNamesEn = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const minMonth = 1
const maxMonth = Number.parseInt(process.env.NEXT_PUBLIC_MAX_MONTH || 12)
const maxYear = Number.parseInt(process.env.NEXT_PUBLIC_MAX_YEAR || 22)

export default function AlertMap({
  t,
  mapLayers
}: {
  t: Function,
  mapLayers: Array<Object>
}): Node {
  const [glStyle, setGlStyle] = useState()
  const [alertGridLayer, setAlertGridLayer] = useState(
    AlertGrid(maxYear, maxMonth, maxMonth) // always start with the latest month
  )
  const [year, setYear] = useState(22)
  const [month, setMonth] = useState(maxMonth)

  useEffect(() => {
    const alertGridUpdated = AlertGrid(year, month, maxMonth)
    setAlertGridLayer(alertGridUpdated)
    setGlStyle(buildMapStyle([alertGridUpdated]))
  }, [month, year])

  return (
    <Map
      id='cam-alert-map'
      title={{ en: 'Alerts' }}
      registerType='REGISTER_ALERT_MAP_COMPONENT'
      t={t}
      baseMap='satellite-streets'
      mapLayers={[alertGridLayer]}
      glStyle={glStyle}
    >
      <div style={{ position: 'absolute', top: '5px', left: '50%' }}>
        <Row
          justify='center'
          align='middle'
          style={{
            width: '220px',
            padding: '5px',
            backgroundColor: 'rgba(255,255,255,0.5)'
          }}
        >
          <Col span={4} style={{ textAlign: 'center' }}>
            <Button
              disabled={month === 1 && year === 20} // our date stats in 2020
              icon={<LeftOutlined />}
              onClick={() => {
                if (month === 1) {
                  setYear(year - 1)
                  setMonth(12)
                } else {
                  setMonth(month - 1)
                }
              }}
            />
          </Col>
          <Col span={16} style={{ textAlign: 'center' }}>
            <span
              style={{
                marginLeft: '5px',
                marginRight: '5px',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              {monthNamesEn[month - 1]}, 20{year}
            </span>
          </Col>
          <Col span={4} style={{ textAlign: 'center' }}>
            <Button
              disabled={month === maxMonth && year >= maxYear}
              icon={<RightOutlined />}
              onClick={() => {
                if (month === 12) {
                  setYear(year + 1)
                  setMonth(1)
                } else {
                  setMonth(month + 1)
                }
              }}
            />
          </Col>
        </Row>
      </div>
    </Map>
  )
}
