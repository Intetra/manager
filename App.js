import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './src/reducers'
import LoginForm from './src/components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC6C___ZSeX5e_p4VItjXofh42a6OK2h3c',
      authDomain: 'manager-69e81.firebaseapp.com',
      databaseURL: 'https://manager-69e81.firebaseio.com',
      projectId: 'manager-69e81',
      storageBucket: 'manager-69e81.appspot.com',
      messagingSenderId: '457051211329'
    }
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
