import NavigationService from '../NavigationService';
import firebase from '../Firebase'
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGN_USER_OUT,
  CREATE_USER,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS
}
  from './types'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
        loginUserFail(dispatch, error)
      })
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload:user
  })
  NavigationService.navigate('main')
}

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    errorCode: error.code,
    errorMessage: error.message
  })
}

export const signUserOut = () => {
  console.log('here')
  return (dispatch) => {
    console.log('here 2')
    dispatch({ type: SIGN_USER_OUT })
    firebase.auth().signOut().then(function() {
      console.log('User signed out')
      NavigationService.navigate('authLoading')
    }).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    });
  }
}

export const createUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER })

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        createUserSuccess(dispatch, user)
        loginUser(email, password)
      })
      .catch((error) => {
        createUserFail(dispatch, error)
        console.log(error.code)
        console.log(error.message)
      })
  }
}

const createUserSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_USER_SUCCESS,
    payload:user
  })
  NavigationService.navigate('main')
}

const createUserFail = (dispatch, error) => {
  dispatch({
    type: CREATE_USER_FAIL,
    errorCode: error.code,
    errorMessage: error.message
  })
}
