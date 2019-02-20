import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection } from '../common'
import NavHeader from '../NavHeader'
import firebase from '../../Firebase'
import { signUserOut } from '../../actions'

class EmployeeList extends Component {

  render() {
    return (
      <View>
        <NavHeader headerText='Employee List' />
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

export default connect(null, { signUserOut })(EmployeeList)
