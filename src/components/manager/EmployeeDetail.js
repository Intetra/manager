import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection } from '../common'
import NavHeader from '../NavHeader'

class EmployeeList extends Component {

  render() {
    return (
      <View>
        <NavHeader headerText='Employee' />
        <Card>
          <CardSection>
            <Text>Employee</Text>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default EmployeeList
