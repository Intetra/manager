import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import CreateEmployeeReducer from './CreateEmployeeReducer'


export default combineReducers({
  auth: AuthReducer,
  employeeForm: CreateEmployeeReducer
})
