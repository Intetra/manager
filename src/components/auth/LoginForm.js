import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import {
  userUpdate,
  loginUser,
  signUserOut
} from '../../actions'
import { Card, CardSection, Input, Button, Spinner } from '../common'
import NavHeader from '../NavHeader'

class LoginForm extends Component {

  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner />
      )
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log In
        </Button>
      )
    }
  }

  render() {
    const { email, password, userUpdate } = this.props
    return (
      <View>
        <NavHeader headerText='Login' />
        <Card>

          <CardSection>
            <Input
              label='Email'
              placeholder='email@gmail.com'
              value={email}
              onChangeText={ value => {
                userUpdate({ prop: 'email', value })
              }}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label='Password'
              placeholder='password'
              value={password}
              onChangeText={ value => {
                userUpdate({ prop: 'password', value })
              }}
            />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>
      </View>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  menuButtonStyle: {
    height: 20,
    width: 20
  }
}

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth
  return { email, password, error, loading }
}

export default connect(mapStateToProps, {
  userUpdate,
  loginUser,
  signUserOut
})(LoginForm)
