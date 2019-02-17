import React from 'react'
import { View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const MainRouter = createStackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: () => ({
      header: null
    }),
  },
  employees: {
    screen: EmployeeList,
    navigationOptions: () => ({
      header: null
    }),
  },
  employee: {
    screen: EmployeeCreate,
    navigationOptions: () => ({
      header: null
    }),
  }
},
{
 initialRouteName: "login",
});

const Router = createAppContainer(MainRouter)

export default Router
