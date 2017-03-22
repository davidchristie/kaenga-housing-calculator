import { getOccupants } from './occupants'
import { getSharing } from './sharing'

function getTotalLivingSpace (state) {
  const {
    adults,
    children,
    teenagers
  } = getOccupants(state)
  const {
    entertainment,
    guestRooms,
    laundries
  } = getSharing(state)
  if (entertainment) {
    return (8 +
      adults * 8.75 +
      teenagers * 8.75 +
      children * 5 -
      laundries * 3) * 0.667 +
      guestRooms * 2
  } else {
    return 8 +
      adults * 8.75 +
      teenagers * 8.75 +
      children * 5 -
      laundries * 3 +
      guestRooms * 2
  }
}

export function getLivingSpace (state) {
  return {
    total: getTotalLivingSpace(state)
  }
}
