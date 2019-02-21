import {
  NAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  VERIFY_CHANGED,
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
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return { ...state, ...INITIAL_STATE }
    case NAME_CHANGED:
      return { ...state, name: action.payload}
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case VERIFY_CHANGED:
      return { ...state, verify: action.payload }
    case BAD_VERIFY:
      return { ...state, password: '', verify: '', error: action.payload }
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user:action.payload }
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
      return { ...state, ...INITIAL_STATE, user:action.payload }
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
