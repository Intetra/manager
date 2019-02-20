import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import firebase from '../../Firebase'
import { emailChanged, passwordChanged, loginUser, signUserOut } from '../../actions'
import { Card, CardSection, Input, Button, Spinner } from '../common'
import NavHeader from '../NavHeader'

const userDB = firebase.firestore().collection('users')

class LoginForm extends Component {
  componentWillMount() {/*
    userDB.get()
      .then(snapshot => {
        snapshot
          .docs
          .forEach(doc => {
            console.log(JSON.parse(doc._document.data.toString()))
          })
      })
  */}

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

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
    const { navigation, password, email } = this.props
    const { menuButtonStyle } = styles
    return (
      <View>
        <NavHeader headerText='Login' />
        <Card>

          <CardSection>
            <Input
              label='Email'
              placeholder='email@gmail.com'
              onChangeText={this.onEmailChange.bind(this)}
              value={email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label='Password'
              placeholder='password'
              onChangeText={this.onPasswordChange.bind(this)}
              value={password}
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
  emailChanged,
  passwordChanged,
  loginUser, signUserOut })(LoginForm)
