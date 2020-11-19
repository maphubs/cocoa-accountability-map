import CDIBoundary from './cdi-boundary'
import LandCover from './land-cover'
import LandCoverCocoa from './land-cover-cocoa'
import ClassifiedForests from './classified-forests'
import ProtectedAreas from './protected-areas'
import AlertGrid from './alert-grid'
import {coopsLayer} from './coops'

const primaryLayers = [coopsLayer, LandCoverCocoa, LandCover, ProtectedAreas, ClassifiedForests, CDIBoundary]

const alertLayers = [JSON.parse(JSON.stringify(CDIBoundary))]

export {
  primaryLayers, alertLayers, AlertGrid
}
