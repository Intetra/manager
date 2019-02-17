import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Card, CardSection } from './common'

class EmployeeList extends Component {

  render() {
    return (
      <View>
        <Header headerText='Employee' />
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
