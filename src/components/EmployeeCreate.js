import React, { Component } from 'react'
import { View, Picker } from 'react-native'
import { connect } from 'react-redux'
import { Header, Card, CardSection, Input, Button } from './common'
import { employeeUpdate } from '../actions'

class EmployeeCreate extends Component {

  renderPickList() {
    const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
    return(
      days.map( day => {
        return (
          <Picker.Item key={day} label={day} value={day} />
        )
      })
    )
  }

  render() {
    const { navigation, name, phone, shift, employeeUpdate } = this.props

    return (
      <View>
        <Header
          headerText='New Employee'
          leftButton='cancel'
          leftOnClick={() => navigation.goBack()}
        />
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
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={ value => employeeUpdate({ prop: 'shift', value })}
            >
              {this.renderPickList()}
            </Picker>
          </CardSection>
          <CardSection>
            <Button>Create</Button>
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
