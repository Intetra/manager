import React, { Component } from 'react'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

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
              titleStyle={styles.titleStyle}
            />
          </Stack>
          <Stack key="main">
            <Scene
              initial
              key="employeeList"
              component={EmployeeList}
              title="Employees"
              titleStyle={styles.titleStyle}
            />
          </Stack>
        </Stack>
      </Router>
    )
  }
}


const styles = {
  titleStyle: {
    flex: 1,
    textAlign: "center"
  }
}

export default RouterComponent
