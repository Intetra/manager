import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import firebase from '../../Firebase'
import { Card, CardSection, Input, Button } from '../common'
import {
  employeeUpdate,
  badVerify,
  createEmployee } from '../../actions'
import NavHeader from '../NavHeader'



class EmployeeCreate extends Component {

  onPress() {


  }

  render() {
    const { name, phone, employeeUpdate } = this.props

    return (
      <View>
        <NavHeader headerText='New Employee' />
        <Card>
          <CardSection>
            <Input
              label='Name'
              placeholder='Jane'
              value={name}
              onChangeText={ value => {
                employeeUpdate({ prop: 'name', value })
              }}
            />
          </CardSection>
          <CardSection>
            <Input
              label='Phone'
              placeholder='555-555-5555'
              value={phone}
              onChangeText={ value => {
                employeeUpdate({ prop: 'phone', value })
              }}
            />
          </CardSection>
          <CardSection>
            <Button onpress={this.onPress()}>Create</Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)
