import React, { Component } from 'react'
import { View, Text, Picker, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from '../common'
import { employeeUpdate } from '../../actions'
import NavHeader from '../NavHeader'

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
    const { name, phone, employeeUpdate } = this.props
    const { pickerLabelStyle, pickerHolderStyle } = styles

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
          <CardSection style={{ flexDirection: 'column' }}>
            <Text style={pickerLabelStyle}>Shift</Text>
            <View style={pickerHolderStyle}>
              <Picker
                style={{ flex: 1 }}
                selectedValue={this.props.shift}
                onValueChange={ value => employeeUpdate({ prop: 'shift', value })}
              >
                {this.renderPickList()}
              </Picker>
            </View>
          </CardSection>
          <CardSection>
            <Button>Create</Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
  pickerHolderStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    paddingLeft: 15,
    paddingRight: 15,
  },
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)