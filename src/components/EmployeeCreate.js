import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Card, CardSection } from './common'

class EmployeeCreate extends Component {
  render() {
    return (
      <View>
        <Header
          headerText='New Employee'
          leftButton='cancel'
          leftOnClick={() => this.props.navigation.goBack()}
        />
        <Card>
          <CardSection>
            <Text>Employee Form</Text>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default EmployeeCreate
