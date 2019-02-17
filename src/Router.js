import React from 'react'
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer } from 'react-navigation'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import AuthLoadingScreen from './components/AuthLoadingScreen'

const AuthRouter = createStackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: () => ({
      header: null
    }),
  },
},
{
 initialRouteName: "login",
})

const MainRouter = createStackNavigator({
  employeeList: {
    screen: EmployeeList,
    navigationOptions: () => ({
      header: null
    }),
  },
  employeeCreate: {
    screen: EmployeeCreate,
    navigationOptions: () => ({
      header: null
    }),
  }
},
{
 initialRouteName: "employeeList",
})

const Router = createAppContainer(createSwitchNavigator({
  authLoading: AuthLoadingScreen,
  main: MainRouter,
  auth: AuthRouter,
},
{
  initialRouteName: 'authLoading',
}))

export default Router
