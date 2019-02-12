export default (state = null, action) => {
  switch (action.type) {
    case 'Default':
      return action.payload;
    default:
      return state;
  }
};
