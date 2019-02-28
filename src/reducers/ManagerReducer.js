import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  CLEAR_STATE,
  GET_EMPLOYER_ID,
  GET_EMPLOYER_ID_SUCCESS,
  GET_EMPLOYER_ID_FAIL,
  SELECT_EMPLOYEE
} from '../actions/types'

const INITIAL_STATE = {
  employees: [],
  loading: false,
  employerID: '',
  error: '',
  selectedEmployee: null
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
      return { ...state, loading: false, error: action.payload }
    case GET_EMPLOYER_ID:
      return { ...state, loading: true }
    case GET_EMPLOYER_ID_SUCCESS:
      return { ...state, loading: false, employerID: action.payload }
    case GET_EMPLOYER_ID_FAIL:
      return { ...state, loading: false, error: action.payload }
    case SELECT_EMPLOYEE:
      return { ...state, selectedEmployee: action.payload }
    default:
      return state
  }
}
