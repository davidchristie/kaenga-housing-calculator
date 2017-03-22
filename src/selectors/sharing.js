export function getSharing (state) {
  const values = state.form.sharing.values || {}
  return {
    entertainment: values.entertainment || false,
    guestRooms: values.guestRooms || false,
    laundries: values.laundries || false
  }
}
