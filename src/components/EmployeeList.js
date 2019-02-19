import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Card, CardSection } from './common'
import firebase from '../Firebase'

class EmployeeList extends Component {
  componentWillMount() {/*
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        console.log(email)
        // ...
      } else {
        console.log('No User')
        // User is signed out.
        // ...
      }
    })
  */}

  render() {
    return (
      <View>
        <Header
          headerText='Employees'
          rightButton='add'
          rightOnClick={() => this.props.navigation.navigate('employeeCreate')}
        />
        <Card>
          <CardSection>
            <Text>Employee</Text>
          </CardSection>
          <CardSection>
            <Text>Employee</Text>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  listStyle: {
    flexDirection: 'column'
  }
}

export default EmployeeList
