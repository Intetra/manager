import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import {  Actions } from 'react-native-router-flux'
import reducers from './src/reducers'
import RouterComponent from './src/Router'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    )
  }
}

export default App
