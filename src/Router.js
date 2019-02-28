import React from 'react'
import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation'
import LoginForm from './components/auth/LoginForm'
import EmployeeList from './components/manager/EmployeeList'
import EmployeeDetail from './components/manager/EmployeeDetail'
import CreateSchedule from './components/manager/CreateSchedule'
import SignUpForm from './components/auth/SignUpForm'
import UserCheck from './UserCheck'
import AuthNavDrawer from './components/auth/AuthNavDrawer'
import ManagerNavDrawer from './components/manager/ManagerNavDrawer'
import EmployeeMain from './components/employee/EmployeeMain'
import EmployeeNavDrawer from './components/employee/EmployeeNavDrawer'

const AuthRouter = createDrawerNavigator({
  login: LoginForm,
  signUp: SignUpForm
},
{
  headerMode: 'none',
  initialRouteName: 'login',
  contentComponent: AuthNavDrawer
})

const ManagerRouter = createDrawerNavigator({
  employeeList: EmployeeList,
  employeeDetail: EmployeeDetail,
  createSchedule: CreateSchedule
},
{
  headerMode: 'none',
  initialRouteName: 'employeeList',
  contentComponent: ManagerNavDrawer
})

const EmployeeRouter = createDrawerNavigator({
  employeeMain: EmployeeMain
},
{
  headerMode: 'none',
  initialRouteName: 'employeeMain',
  contentComponent: EmployeeNavDrawer
})

const Router = createAppContainer(createSwitchNavigator({
  userCheck: UserCheck,
  manager: ManagerRouter,
  employee: EmployeeRouter,
  auth: AuthRouter,
},
{
  headerMode: 'none',
  initialRouteName: 'userCheck',
}))

export default Router
