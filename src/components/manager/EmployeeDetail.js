import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection } from '../common'
import NavHeader from '../NavHeader'

class EmployeeDetail extends Component {

  render() {
    const { firstName, lastName, email, } = this.props.selectedEmployee
    return (
      <View>
        <NavHeader headerText='Employee Detail' />
        <Card>
          <CardSection>
            <Text>{firstName + ' ' + lastName}</Text>
          </CardSection>
          <CardSection>
            <Text>{email}</Text>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { selectedEmployee } = state.manager
  return { selectedEmployee }
}

export default connect(mapStateToProps, {})(EmployeeDetail)
