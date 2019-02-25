import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Button } from '../common'
import NavHeader from '../NavHeader'
import firebase from '../../Firebase'
import { signUserOut, getEmployees } from '../../actions'

class EmployeeList extends Component {

  componentWillMount() {
    this.props.getEmployees()
  }

  renderList() {
    const { employees } = this.props
    return (
      <Card>
        {employees.map( (employee) =>
          <CardSection key={employee.email}>
            <Button style={styles.employeeButtonStyle}>
              <Text>{employee.name}</Text>
            </Button>
          </CardSection>
        )}
      </Card>
    )
  }

  render() {
    return (
      <View>
        <NavHeader headerText='Employee List' />
          {this.renderList()}
      </View>
    )
  }
}

const styles = {
  employeeButtonStyle: {
  }
}

const mapStateToProps = state => {
  const { employees } = state.manager
  return { employees }
}

export default connect(mapStateToProps, { signUserOut, getEmployees })(EmployeeList)
