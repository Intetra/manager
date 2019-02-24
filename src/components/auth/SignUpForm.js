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
    const { manager, isManager, name, email, password, verify, createUser, badVerify } = this.props
    if (password === verify) {
      if (typeof isManager === "boolean") {
        createUser({ manager, isManager, name, email, password })
      } else {
        badVerify('Select Employer or Employee')
      }
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
    const { userUpdate, answer, manager } = this.props
    const { questionTextStyle, imageStyle } = styles
    if (!answer) {
      return (
        <Card>
          <CardSection style={questionTextStyle}>
            <Text>Are you an employer, or an employee?</Text>
          </CardSection>
          <CardSection>
            <Button
              onPress={() => {
                userUpdate({ prop: 'answer', value: 'employer' })
                userUpdate({ prop: 'isManager', value: true })
              }}
            >
              Employer
            </Button>
          </CardSection>
          <CardSection>
          <Button
            onPress={() => {
              userUpdate({ prop: 'answer', value: 'employee' })
              userUpdate({ prop: 'isManager', value: false })
            }}
          >
            Employee
          </Button>
          </CardSection>
        </Card>
      )
    } else {
      if (answer === 'employer') {
        return (
          <Card>
            <CardSection style={questionTextStyle}>
            <Image
              source={require('../../static/checkmark.png')}
              style={imageStyle} />
            </CardSection>
          </Card>
        )
      } else if (answer === 'employee') {
        return (
          <Card>
            <CardSection style={questionTextStyle}>
              <Text>Please enter your employer's ID</Text>
            </CardSection>
            <CardSection>
              <Input
                label='ID'
                placeholder='TskMlaDZHfe4fzYDPhBFm2'
                value={manager}
                onChangeText={ value => {
                  userUpdate({ prop: 'manager', value })
                }}
              />
            </CardSection>
          </Card>
        )
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
  imageStyle: {
    width: 50,
    height: 50
  }
}

const mapStateToProps = state => {
  const { name, email, password, verify, error, loading, answer, manager, isManager } = state.auth
  return { name, email, password, verify, error, loading, answer, manager, isManager }
}

export default connect(mapStateToProps, {
  userUpdate,
  loginUser,
  signUserOut,
  createUser,
  badVerify
})(SignUpForm)
