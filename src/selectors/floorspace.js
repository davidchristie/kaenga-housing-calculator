import {
  getBathtubFloorspace,
  getDoubleBedroomFloorspace,
  getShowerFloorspace,
  getSingleBedroomFloorspace,
  getStudyFloorspace,
  getToiletFloorspace
} from '../models/floorspace'

export function getHomeFloorspace (state) {
  const values = state.form.home.values || {}
  return {
    bathtubs: getBathtubFloorspace(values.bathtubs || 0),
    doubleBedrooms: getDoubleBedroomFloorspace(values.doubleBedrooms || 0),
    singleBedrooms: getSingleBedroomFloorspace(values.singleBedrooms || 0),
    showers: getShowerFloorspace(values.showers || 0),
    study: getStudyFloorspace(values.study || 0),
    toilets: getToiletFloorspace(values.toilets || 0)
  }
}
