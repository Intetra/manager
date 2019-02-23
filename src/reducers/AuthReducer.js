import {
  USER_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGN_USER_OUT,
  CREATE_USER,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  BAD_VERIFY,
  CLEAR_STATE
}
  from '../actions/types'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  verify: '',
  error: '',
  loading: false,
  answer: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return { ...state, ...INITIAL_STATE }
    case USER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case BAD_VERIFY:
      return { ...state, password: '', verify: '', error: action.payload }
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE }
    case LOGIN_USER_FAIL:
      return { ...state,
        error: action.errorCode + ' - ' + action.errorMessage,
        password: '',
        loading: false }
    case SIGN_USER_OUT:
      return { ...state, ...INITIAL_STATE }
    case CREATE_USER:
      return { ...state, loading: true, error: '' }
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE }
    case CREATE_USER_FAIL:
      return { ...state,
        error: action.errorCode + ' - ' + action.errorMessage,
        password: '',
        verify: '',
        loading: false }
    default:
      return state
  }
}
