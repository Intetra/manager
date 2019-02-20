import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import firebase from '../../Firebase'
import { emailChanged, passwordChanged, loginUser, signUserOut, createUser } from '../../actions'
import { Header, Card, CardSection, Input, Button, Spinner } from '../common'

const userDB = firebase.firestore().collection('users')

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

  onButtonPress() {
    const { email, password } = this.props
    this.props.createUser({ email, password })
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
        <Header
          headerText='Sign Up'
          leftButton={ <Image
            source={require('../../static/menu.png')}
            style={styles.menuButtonStyle} /> }
          leftOnClick={() => this.props.navigation.openDrawer()}
        />
        <Card>

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
  loginUser,
  signUserOut,
  createUser
})(SignUpForm)
