export default (state = null, action) => {
  switch (action.type) {
    case 'default_reducer':
      return action.payload
    default:
      return state
  }
}
