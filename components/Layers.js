// @flow
import React from 'react'
import { Typography, Switch, List } from 'antd'
import { useSelector } from 'react-redux'

const { Title } = Typography

type Props = {
  layers: Array<Object>,
  onToggle: Function,
  t: Function,
}

export default function Layers ({t, layers, onToggle}: Props) {
  const mapComponent = useSelector(state => state.cam.primaryMapComponent)
  const filteredLayers = layers.filter(layer => layer.style.metadata['maphubs:active'])
  return (
    <div style={{height: '100%', width: '100%'}}>
      <Title style={{marginLeft: '10px'}} level={5}>{t('Layers')}</Title>
      <div style={{height: 'calc(100% - 25px)', overflowY: 'auto'}}>
        <List
          size='small'
          dataSource={filteredLayers}
          renderItem={layer => (
            <List.Item>
              <Switch
                size='small' defaultChecked onChange={(val) => {
                  onToggle(layer, val)
                  mapComponent.toggleVisibility(layer.layer_id)
                }}
              /><span>{t(layer.name)}</span>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}
