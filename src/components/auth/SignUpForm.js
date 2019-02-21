import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import {
  nameChanged,
  emailChanged,
  passwordChanged,
  verifyChanged,
  loginUser,
  signUserOut,
  createUser,
  badVerify
} from '../../actions'
import { Card, CardSection, Input, Button, Spinner } from '../common'
import NavHeader from '../NavHeader'

class SignUpForm extends Component {

  onNameChange(text) {
    this.props.nameChanged(text)
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onVerifyChange(text) {
    this.props.verifyChanged(text)
  }

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
    return (
      <View>
        <NavHeader headerText='Sign Up' />
        <Card>

        <CardSection>
          <Input
            label='Name'
            placeholder='Jane'
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
          />
        </CardSection>

          <CardSection>
            <Input
              label='Email'
              placeholder='email@gmail.com'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label='Password'
              placeholder='password'
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label='Verify'
              placeholder='password'
              onChangeText={this.onVerifyChange.bind(this)}
              value={this.props.verify}
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
  emailChanged,
  passwordChanged,
  verifyChanged,
  loginUser,
  signUserOut,
  createUser,
  nameChanged,
  badVerify
})(SignUpForm)
