import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { connect } from 'react-redux'
import { clearState } from '../../actions'
import { Header, Button, Card, CardSection } from '../common'

class AuthNavDrawer extends Component {

  onPress(path) {
    const { navigation, clearState } = this.props
    clearState()
    navigation.navigate(path)
  }

  render() {
    return (
      <View>
        <Header headerText='Auth Nav' />
        <Card>
          <CardSection>
            <Button onPress={() => this.onPress('login')}>
              Log In
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.onPress('signUp')}>
              Sign Up
            </Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default connect(null, { clearState })(AuthNavDrawer)
