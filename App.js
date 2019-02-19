import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import '@firebase/firestore'
import ReduxThunk from 'redux-thunk'
import ignoreWarnings from 'react-native-ignore-warnings'
import NavigationService from './src/NavigationService';
import reducers from './src/reducers'
import Router from './src/Router'

class App extends Component {

  componentWillMount() {
    ignoreWarnings('Setting a timer')
    const config = {
      apiKey: 'AIzaSyC6C___ZSeX5e_p4VItjXofh42a6OK2h3c',
      authDomain: 'manager-69e81.firebaseapp.com',
      databaseURL: 'https://manager-69e81.firebaseio.com',
      projectId: 'manager-69e81',
      storageBucket: 'manager-69e81.appspot.com',
      messagingSenderId: '457051211329'
    }
    firebase.initializeApp(config)
    var db = firebase.firestore();
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    )
  }
}

export default App
