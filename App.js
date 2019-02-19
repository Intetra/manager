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



export default class App extends Component {

  componentWillMount() {
    ignoreWarnings('Setting a timer')
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
