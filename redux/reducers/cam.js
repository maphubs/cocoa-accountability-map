// @flow

export type CamState = {
 primaryMapState?: Object,
 primaryMapComponent?: Object,
 alertMapState?: Object,
 alertMapComponent?: Object,
 searchResults: Array<Object>
}

const initialCamState: CamState = {
  searchResults: []
}

const cam = (state: CamState = initialCamState, action: Object): CamState => {
  switch (action.type) {
    case 'REGISTER_PRIMARY_MAP_COMPONENT':
      return {...state, ...registerPrimaryMapComponent(action)}
    case 'REGISTER_ALERT_MAP_COMPONENT':
      return {...state, ...registerAlertMapComponent(action)}
    case 'SET_SEARCH_RESULTS':
      return {...state, ...setSearchResults(action)}
    default:
      return state
  }
}

const registerPrimaryMapComponent = ({mapComponent, mapState}: {mapComponent: Object, mapState: Object}): Object => {
  return {
    primaryMapState: mapState,
    primaryMapComponent: mapComponent
  }
}

const registerAlertMapComponent = ({mapComponent, mapState}: {mapComponent: Object, mapState: Object}): Object => {
  return {
    alertMapState: mapState,
    alertMapComponent: mapComponent
  }
}

const setSearchResults = ({searchResults}: {searchResults: Array<Object>}): Object => {
  return {
    searchResults
  }
}

export { initialCamState }
export default cam
