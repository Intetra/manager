import {
  CREATE_SCHEDULE,
  CLEAR_STATE,
  DAY_SELECT
} from '../actions/types'

const INITIAL_STATE = {
  monday: {
    isSelected: false
  },
  tuesday: {
    isSelected: false
  },
  wednesday: {
    isSelected: false
  },
  thursday: {
    isSelected: false
  },
  friday: {
    isSelected: false
  },
  saturday: {
    isSelected: false
  },
  sunday: {
    isSelected: false
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return { ...state, ...INITIAL_STATE }
    case CREATE_SCHEDULE:
      return foo
    case DAY_SELECT:
      const day = action.payload
      return {
        ...state,
        [day]: {
          ...state[day],
          isSelected: !state[day].isSelected
        }
      }
    default:
      return state
  }
}
