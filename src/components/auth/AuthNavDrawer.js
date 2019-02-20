import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Button, Card, CardSection } from '../common'

class AuthNavDrawer extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Header headerText='Auth Nav' />
        <Card>
          <CardSection>
            <Button onPress={() => navigate('login')}>
              Log In
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => navigate('signUp')}>
              Sign Up
            </Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default AuthNavDrawer
