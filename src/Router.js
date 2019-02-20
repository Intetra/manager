import React from 'react'
import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation'
import LoginForm from './components/auth/LoginForm'
import EmployeeList from './components/EmployeeList'
import SignUpForm from './components/auth/SignUpForm'
import EmployeeCreate from './components/EmployeeCreate'
import AuthLoadingScreen from './components/auth/AuthLoadingScreen'
import MainNavDrawer from './components/MainNavDrawer'

const AuthRouter = createDrawerNavigator({
  login: LoginForm,
  signUp: SignUpForm
},
{
  headerMode: 'none',
  initialRouteName: 'login',
})



const MainRouter = createDrawerNavigator({
  employeeList: EmployeeList,
  employeeCreate: EmployeeCreate,
},
{
  headerMode: 'none',
  initialRouteName: 'employeeList',
  contentComponent: MainNavDrawer
})

const Router = createAppContainer(createSwitchNavigator({
  authLoading: AuthLoadingScreen,
  main: MainRouter,
  auth: AuthRouter,
},
{
  headerMode: 'none',
  initialRouteName: 'authLoading',
}))

export default Router
