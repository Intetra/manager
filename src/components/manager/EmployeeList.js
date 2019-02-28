import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Button, Spinner } from '../common'
import NavHeader from '../NavHeader'
import firebase from '../../Firebase'
import {
  signUserOut,
  getEmployees,
  getEmployerID,
  selectEmployee,
  clearState
} from '../../actions'

class EmployeeList extends Component {

  componentWillMount() {
    const { clearState, getEmployees, getEmployerID } = this.props
    clearState()
    getEmployees()
    getEmployerID()
  }

  renderEmployerID() {
    return (
      <Card>
        <CardSection style={styles.employerIDHolderStyle}>
          <Text style={styles.employerIDLine1Style}>
            Your employer ID is:
          </Text>
          <Text style={styles.employerIDLine2Style}>
            {this.props.employerID}
          </Text>
        </CardSection>
      </Card>
    )
  }

  onPress(employee) {
    const { selectEmployee, navigation } = this.props
    selectEmployee(employee)
    navigation.navigate('employeeDetail')

  }

  renderList() {
    const { employees } = this.props
    return (
      <Card>
        {employees.map( (employee) =>
          <CardSection key={employee.email}>
            <Button
              style={styles.employeeButtonStyle}
              onPress={() => this.onPress(employee)}
            >
              <Text>{employee.firstName + ' ' + employee.lastName }</Text>
            </Button>
          </CardSection>
        )}
      </Card>
    )
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.spinnerHolderStyle}>
          <Spinner size={50} />
        </View>
      )
    } else {
      return (
        <View>
            <NavHeader headerText='Employee List' />
            {this.renderEmployerID()}
            {this.renderList()}
        </View>
      )
    }
  }
}

const styles = {
  spinnerHolderStyle: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  employerIDHolderStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  employerIDLine1Style: {
    fontSize: 18
  },
  employerIDLine2Style: {
    fontSize: 20
  }
}

const mapStateToProps = state => {
  const { employees, employerID, loading } = state.manager
  return { employees, employerID, loading }
}

export default connect(mapStateToProps, {
  signUserOut,
  getEmployees,
  getEmployerID,
  selectEmployee,
  clearState
})(EmployeeList)
