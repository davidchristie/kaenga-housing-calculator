import design from '../selectors/design'
import * as buildCost from '../selectors/build-cost'
import lifestyle from '../selectors/lifestyle'
import * as landCost from '../selectors/land-cost'
import sustainability from '../selectors/sustainability'

import artistStudioImage from './feature-images/Artist studio.jpeg'
import gymImage from './feature-images/Gym and yoga studio.jpg'
import gardenImage from './feature-images/Rooftop veggie garden.jpg'
import avRoomImage from './feature-images/AV room for games and movies.jpg'
import libraryImage from './feature-images/Library and study space.jpeg'
import smartSustainabilityImage from './feature-images/Smart sustainability features such as insulation, double glazing, and waste minimization.jpeg'
import publicTransportImage from './feature-images/Close to public transport.jpeg'
import workshopImage from './feature-images/Makers space and workshop.jpg'
import sustainabilityImage from './feature-images/Sustainability picture.jpg'
import entertainmentImage from './feature-images/Entertainment space for hosting large gatherings.jpg'
import musicImage from './feature-images/Music Room.jpeg'
import storageImage from './feature-images/Ground floor storage for bikes, kayaks, etc.jpeg'
import carsharingImage from './feature-images/Onsite carsharing scheme.jpeg'

export default [
  {
    condition: state => true,
    cost: state => ({max: 0, min: 0}),
    image: carsharingImage,
    text: 'Onsite car share service'
  },
  {
    condition: state => true,
    cost: state => ({max: 0, min: 0}),
    image: publicTransportImage,
    text: 'Close to public transport'
  },
  {
    condition: state => design(state).guestStudio,
    cost: state => {
      return {
        max: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).min)
      }
    },
    text: 'Shared guest studios'
  },
  {
    condition: state => lifestyle(state).sports,
    cost: state => ({max: 2000, min: 2000}),
    image: storageImage,
    text: 'Plenty of storage for your sports equipment'
  },
  {
    condition: state => lifestyle(state).exercising,
    cost: state => {
      return {
        max: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).min)
      }
    },
    image: gymImage,
    tags: ['multipurpose'],
    text: 'Onsite gym and yoga studio'
  },
  {
    condition: state => lifestyle(state).building,
    cost: state => {
      return {
        max: 1.2 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).max),
        min: 1.2 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).min)
      }
    },
    image: workshopImage,
    text: 'Communal workshop/makers space'
  },
  {
    condition: state => lifestyle(state).gardening,
    cost: state => ({max: 10000, min: 10000}),
    image: gardenImage,
    text: 'Roof top flower and vegie garden'
  },
  {
    condition: state => lifestyle(state).games,
    cost: state => {
      return {
        max: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).min)
      }
    },
    image: avRoomImage,
    tags: ['multipurpose'],
    text: 'A communal games room'
  },
  {
    condition: state => lifestyle(state).reading,
    cost: state => {
      return {
        max: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).min)
      }
    },
    image: libraryImage,
    tags: ['multipurpose'],
    text: 'A communal study/reading room'
  },
  {
    condition: state => lifestyle(state).music,
    cost: state => {
      return {
        max: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).min)
      }
    },
    image: musicImage,
    tags: ['multipurpose'],
    text: 'A music room'
  },
  {
    condition: state => lifestyle(state).art,
    cost: state => {
      return {
        max: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).min)
      }
    },
    image: artistStudioImage,
    tags: ['multipurpose'],
    text: 'An onsite artist studio'
  },
  {
    condition: state => lifestyle(state).socialising,
    cost: state => {
      return {
        max: 3.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).max),
        min: 3.5 * (buildCost.getBuildCostPerSqm(state) +
          landCost.getPerSqmRange(state).min)
      }
    },
    image: entertainmentImage,
    text: 'Indoor and outdoor entertainment spaces with a high end kitchen and barbeque'
  },
  {
    condition: state => sustainability(state).level === 'low',
    cost: state => ({max: 0, min: 0}),
    image: sustainabilityImage,
    text: 'Sensible sustainability measure like orienting the building north, reducing waste and insulating your home well.'
  },
  {
    condition: state => sustainability(state).level === 'medium',
    cost: state => ({max: 0, min: 0}),
    image: smartSustainabilityImage,
    text: 'Smart energy efficient technology that will save you money in the long run.'
  },
  {
    condition: state => sustainability(state).level === 'high',
    cost: state => ({max: 0, min: 0}),
    image: smartSustainabilityImage,
    text: 'Your home will be built to the rigorous Passivhaus standard.'
  }
]
