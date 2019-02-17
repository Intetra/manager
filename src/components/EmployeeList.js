import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Card, CardSection } from './common'

class EmployeeList extends Component {

  render() {
    return (
      <View>
        <Header headerText='Employees' />
        <Card>
          <CardSection>
            <Text>Employee</Text>
          </CardSection>
          <CardSection>
            <Text>Employee</Text>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  listStyle: {
    flexDirection: 'column'
  }
}

export default EmployeeList
