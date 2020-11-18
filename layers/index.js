import CDIBoundary from './cdi-boundary'
import LandCover from './land-cover'
import LandCoverCocoa from './land-cover-cocoa'
import ClassifiedForests from './classified-forests'
import ProtectedAreas from './protected-areas'
import CoopsLayer from './coops'
import AlertGrid from './alert-grid'

const coopsData = require('../data/coops-20201118.json')

CoopsLayer.style.sources.coops.data = coopsData

const primaryLayers = [LandCoverCocoa, LandCover, ProtectedAreas, ClassifiedForests, CDIBoundary]

const alertLayers = [JSON.parse(JSON.stringify(CDIBoundary))]

export {
  CoopsLayer, coopsData, primaryLayers, alertLayers, AlertGrid
}
