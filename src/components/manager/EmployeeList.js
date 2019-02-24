import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection } from '../common'
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
            <Text>{employee.name}</Text>
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

const mapStateToProps = state => {
  const { employees } = state.manager
  return { employees }
}

export default connect(mapStateToProps, { signUserOut, getEmployees })(EmployeeList)
