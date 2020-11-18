import CDIBoundary from './cdi-boundary'
import LandCover from './land-cover'
import ClassifiedForests from './classified-forests'
import ProtecteAreas from './protected-areas'
import CoopsLayer from './coops'
import AlertGrid from './alert-grid'

const coopsData = require('../data/coops-20201118.json')

CoopsLayer.style.sources.coops.data = coopsData

const primaryLayers = [ProtecteAreas, ClassifiedForests, LandCover, CDIBoundary]

const alertLayers = [JSON.parse(JSON.stringify(CDIBoundary))]

export {
  CoopsLayer, coopsData, primaryLayers, alertLayers, AlertGrid
}
