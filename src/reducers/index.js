import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import ManagerReducer from './ManagerReducer'
import ScheduleReducer from './ScheduleReducer'


export default combineReducers({
  auth: AuthReducer,
  manager: ManagerReducer,
  schedule: ScheduleReducer
})
