import React from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux'
import firebase from './Firebase'
import { Spinner } from './components/common'
import { loginUser, signUserOut } from './actions'

//initialize the user database
const userDB = firebase.firestore().collection("users")

class UserCheck extends React.Component {
  componentWillMount() {
    //destructuring
    const { navigate } = this.props.navigation
    const { signUserOut } = this.props
    //declare auth state listener
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        //user is logged in
        //query database for a user entry with the logged in user's ID
        userDB.doc(user.uid).get().then( dbUser => {
          if (dbUser) {
            //user exists in database
            if (dbUser.data().isManager) {
              //user is a manager
              navigate('manager')
            } else {
              //user is not a manager
              navigate('employee')
            }
          } else {
            //user exists in auth, but not database
            console.log('USER EXISTS IN AUTH, BUT NOT IN DATABASE')
            signUserOut()
          }
        })
      } else {
        //no logged in user
        navigate('auth')
      }
    });
  }

  // Render any loading content that you like here
  render() {
    const { viewStyle } = styles
    return (
      <View style={viewStyle}>
        <Spinner size={50} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    height: '100%'
  },

}

export default connect(null, {loginUser, signUserOut})(UserCheck)
