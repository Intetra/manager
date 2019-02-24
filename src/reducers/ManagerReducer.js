import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  CLEAR_STATE,
} from '../actions/types'

const INITIAL_STATE = {
  employees: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return { ...state, ...INITIAL_STATE }
    case GET_EMPLOYEES:
      return { ...state, loading: true }
    case GET_EMPLOYEES_SUCCESS:
      return { ...state, loading: false, employees: action.payload }
    case GET_EMPLOYEES_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}
