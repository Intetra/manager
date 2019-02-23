import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import {
  userUpdate,
  loginUser,
  signUserOut,
  createUser,
  badVerify
} from '../../actions'
import { Card, CardSection, Input, Button, Spinner } from '../common'
import NavHeader from '../NavHeader'

class SignUpForm extends Component {

  onButtonPress() {
    const { name, email, password, verify, createUser, badVerify } = this.props
    if (password === verify) {
      createUser({ name, email, password })
    } else {
      badVerify('Passwords dont match.')
    }

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
          Sign Up
        </Button>
      )
    }
  }

  render() {
    const { name, email, password, verify, userUpdate } = this.props
    return (
      <View>
        <NavHeader headerText='Sign Up' />
        <Card>

        <CardSection>
          <Input
            label='Name'
            placeholder='Jane'
            value={name}
            onChangeText={ value => {
              userUpdate({ prop: 'name', value })
            }}
          />
        </CardSection>

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

          <CardSection>
            <Input
              secureTextEntry
              label='Verify'
              placeholder='password'
              value={verify}
              onChangeText={ value => {
                userUpdate({ prop: 'verify', value })
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
}

const mapStateToProps = state => {
  const { name, email, password, verify, error, loading } = state.auth
  return { name, email, password, verify, error, loading }
}

export default connect(mapStateToProps, {
  userUpdate,
  loginUser,
  signUserOut,
  createUser,
  badVerify
})(SignUpForm)
