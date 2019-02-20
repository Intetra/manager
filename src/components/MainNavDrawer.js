import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Header, Button, Card, CardSection } from './common'
import { signUserOut } from '../actions'

class MainNavDrawer extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Header headerText='Main Nav' />
        <Card>
          <CardSection>
            <Button onPress={() => navigate('employeeList')}>
              Employee List
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => navigate('employeeCreate')}>
              Create Employee
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.props.signUserOut()}>
              Sign Out
            </Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default connect(null, { signUserOut })(MainNavDrawer)
