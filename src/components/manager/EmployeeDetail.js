import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection } from '../common'
import Header from '../common'

class EmployeeList extends Component {

  render() {
    const { name, email } = this.props
    return (
      <View>
        <Header headerText='Employee Detail' />
        <Card>
          <CardSection>
            <Text>{name}</Text>
          </CardSection>
          <CardSection>
            <Text>{email}</Text>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default EmployeeList
