import React, { Component } from 'react'
import { View, Text } from 'react-native'
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

  renderSignUpButton() {
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

  renderQuestion() {
    const { userUpdate } = this.props
    if (!this.props.answer) {
      return (
        <Card>
          <CardSection style={styles.questionTextStyle}>
            <Text>Are you an employer, or an employee?</Text>
          </CardSection>
          <CardSection>
            <Button
              onPress={() => {
                userUpdate({ prop: 'answer', value: 'employer' })
              }}
            >
              Employer
            </Button>
          </CardSection>
          <CardSection>
          <Button
            onPress={() => userUpdate({ prop: 'answer', value: 'employee' })}
          >
            Employee
          </Button>
          </CardSection>
        </Card>
      )
    } else {
      if (this.props.answer === 'employer') {
        return <Card><CardSection><Text>employer case</Text></CardSection></Card>
      } else if (this.props.answer === 'employee') {
        return <Card><CardSection><Text>employee case</Text></CardSection></Card>
      } else {
        return <Card><CardSection><Text>error case</Text></CardSection></Card>
      }
    }
  }

  render() {
    const { name, email, password, verify, userUpdate } = this.props
    return (
      <View>
        <NavHeader headerText='Sign Up' />
        {this.renderQuestion()}
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
            {this.renderSignUpButton()}
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
  questionTextStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
}

const mapStateToProps = state => {
  const { name, email, password, verify, error, loading, answer } = state.auth
  return { name, email, password, verify, error, loading, answer }
}

export default connect(mapStateToProps, {
  userUpdate,
  loginUser,
  signUserOut,
  createUser,
  badVerify
})(SignUpForm)
