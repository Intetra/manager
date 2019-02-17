import React, { Component } from 'react'
import { View } from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const renderPlaceholder = () => <View />

class RouterComponent extends Component {
  onBackPress() {
    if (Actions.state.index === 0) {
      return false
    }
    Actions.pop()
    return true
  }

  render() {
    return (
      <Router backAndroidHandler={this.onBackPress}>
        <Stack key="root" hideNavBar>
          <Stack key="auth">
            <Scene
              initial
              key="login"
              component={LoginForm}
              title="Please log in"
              titleStyle={{textAlign: "center", flex: 1}}
              renderLeftButton={this.renderPlaceholder}
              renderRightButton={this.renderPlaceholder}
            />
          </Stack>
          <Stack key="main">
            <Scene
              initial
              key="employeeList"
              component={EmployeeList}
              title="Employees"
              titleStyle={{textAlign: "center", flex: 1}}
              rightTitle="Add"
              onRight={() => Actions.employeeCreate()}
              renderLeftButton={this.renderPlaceholder}
            />
            <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Create Employee"
              titleStyle={{textAlign: "center", flex: 1}}
              renderRightButton={this.renderPlaceholder}
            />
          </Stack>
        </Stack>
      </Router>
    )
  }
}

export default RouterComponent
