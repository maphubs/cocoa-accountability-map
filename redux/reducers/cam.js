// @flow

export type CamState = {
 primaryMapState?: Object,
 primaryMapComponent?: Object,
 alertMapState?: Object,
 alertMapComponent?: Object
}

const initialCamState = {

}

const cam = (state: CamState = initialCamState, action: Object) => {
  switch (action.type) {
    case 'REGISTER_PRIMARY_MAP_COMPONENT':
      return {...state, ...registerPrimaryMapComponent(state, action)}
    case 'REGISTER_ALERT_MAP_COMPONENT':
      return {...state, ...registerAlertMapComponent(state, action)}
    default:
      return state
  }
}

const registerPrimaryMapComponent = (state, {mapComponent, mapState}: {mapComponent: Object, mapState: Object}): Object => {
  return {
    primaryMapState: mapState,
    primaryMapComponent: mapComponent
  }
}

const registerAlertMapComponent = (state, {mapComponent, mapState}: {mapComponent: Object, mapState: Object}): Object => {
  return {
    alertMapState: mapState,
    alertMapComponent: mapComponent
  }
}

export { initialCamState }
export default cam
