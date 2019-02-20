import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Header, Card, CardSection } from './common'
import firebase from '../Firebase'
import { signUserOut } from '../actions'

class EmployeeList extends Component {
  componentWillMount() {
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
  }

  render() {
    return (
      <View>
        <Header
          headerText='Employees'
          leftButton={ <Image
            source={require('../static/menu.png')}
            style={styles.menuButtonStyle} /> }
          leftOnClick={() => this.props.navigation.openDrawer()}
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
  },
  menuButtonStyle: {
    height: 20,
    width: 20
  }

}

connect(null, { signUserOut })(EmployeeList)

export default EmployeeList
