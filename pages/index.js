// @flow
import React, {useState} from 'react'
import {
  Layout,
  Row,
  Col
} from 'antd'

import COOPSearch from '../components/COOPs'
import Layers from '../components/Layers'
import PrimaryMap from '../components/PrimaryMap'
import AlertMap from '../components/AlertMap'
import { CoopsLayer, coopsData, primaryLayers, alertLayers } from '../layers'

const { Content, Sider } = Layout

// placeholder for translate function
const t = (val) => {
  if (typeof val === 'object' && val.en) {
    return val.en
  }
  return val
}

export default function Home () {
  const [collapsed, setCollapsed] = useState(false)
  const [coops, setCoops] = useState({
    layer: CoopsLayer,
    data: coopsData
  })
  const [layers, setLayers] = useState([coops.layer, ...primaryLayers])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsedWidth={0} theme='light' collapsed={collapsed} onCollapse={() => { setCollapsed(!collapsed) }}>
        {!collapsed &&
          <>
            <Row style={{height: '70vh'}}>
              <COOPSearch
                coops={coops.data.features} t={t}
              />
            </Row>
            <Row style={{height: '30vh'}}>
              <Layers
                layers={layers} onToggle={(layer, val) => {
                  console.log(`toggled ${layer.name} - ${val}`)
                }} t={t}
              />
            </Row>
          </>}
      </Sider>
      <Layout className='site-layout'>
        <Content style={{ margin: '0' }}>
          <Row style={{width: '100%', height: '100%'}}>
            <Col md={12} sm={24} style={{border: '1px solid #ddd'}}>
              <PrimaryMap t={t} mapLayers={layers} />
            </Col>
            <Col md={12} sm={24} style={{border: '1px solid #ddd'}}>
              <AlertMap t={t} mapLayers={alertLayers} />
            </Col>
          </Row>
        </Content>
      </Layout>
      <style jsx global>{`
        .ant-layout-sider-zero-width-trigger {
          bottom: 64px !important;
          top: inherit !important;
        }
        ul {
          padding-left: 0px;
          list-style-type: none;
        }
      `}
      </style>
    </Layout>
  )
}
