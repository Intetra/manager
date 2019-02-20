import React, { Component } from 'react'
import { View, Text } from 'react-native'
import NavHeader from '../NavHeader'
import { Card, CardSection } from '../common'

class EmployeeMain extends Component {
  render() {
    return (
      <View>
        <NavHeader headerText='EmployeeMain' />
        <Card>
          <CardSection>
            <Text>Employee Landing Screen</Text>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default EmployeeMain
