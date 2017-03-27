import {
  getBathtubFloorspace,
  getDoubleBedroomFloorspace,
  getShowerFloorspace,
  getSingleBedroomFloorspace,
  getStudyFloorspace,
  getToiletFloorspace
} from '../models/floorspace'
import { getTotalLivingSpace } from './living-space'

export function getHomeFloorspace (state) {
  const form = state.form || {}
  const home = form.home || {}
  const values = home.values || {}
  return {
    bathtubs: getBathtubFloorspace(values.bathtubs || 0),
    doubleBedrooms: getDoubleBedroomFloorspace(values.doubleBedrooms || 0),
    singleBedrooms: getSingleBedroomFloorspace(values.singleBedrooms || 0),
    showers: getShowerFloorspace(values.showers || 0),
    study: getStudyFloorspace(values.study || 0),
    toilets: getToiletFloorspace(values.toilets || 0)
  }
}

export function getTotalHomeFloorspace (state) {
  const {
    bathtubs,
    doubleBedrooms,
    singleBedrooms,
    showers,
    study,
    toilets
  } = getHomeFloorspace(state)
  return bathtubs +
    doubleBedrooms +
    singleBedrooms +
    showers +
    study +
    toilets
}

export function getTotalFloorspace (state) {
  const floorspace = getTotalHomeFloorspace(state)
  const livingSpace = getTotalLivingSpace(state)
  return floorspace + livingSpace
}
