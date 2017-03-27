export function getSharing (state) {
  const form = state.form || {}
  const sharing = form.sharing || {}
  const values = sharing.values || {}
  return {
    entertainment: values.entertainment || false,
    guestRooms: values.guestRooms || false,
    laundries: values.laundries || false
  }
}
