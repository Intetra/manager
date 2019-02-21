import firebase from '../Firebase'
import {
  NAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  VERIFY_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGN_USER_OUT,
  CREATE_USER,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  BAD_VERIFY,
  CLEAR_STATE
} from './types'
import NavigationService from '../NavigationService'

export const clearState = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_STATE })
  }
}

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  }
}

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

export const badVerify = (text) => {
  return {
    type: BAD_VERIFY,
    payload: text
  }
}

export const verifyChanged = (text) => {
  return {
    type: VERIFY_CHANGED,
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
  NavigationService.navigate('userCheck')
}

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    errorCode: error.code,
    errorMessage: error.message
  })
}

export const signUserOut = () => {
  return (dispatch) => {
    dispatch({ type: SIGN_USER_OUT })
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    });
  }
}

export const createUser = ({ name, email, password }) => {
  return (dispatch) => {
    dispatch({ type: CREATE_USER })

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser
        const userDB = firebase.firestore().collection('users')
        userDB.doc(user.uid).set({
          name: name,
          isManager: true,
          email: email
        })
        createUserSuccess(dispatch, user)
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
  NavigationService.navigate('userCheck')
}

const createUserFail = (dispatch, error) => {
  dispatch({
    type: CREATE_USER_FAIL,
    errorCode: error.code,
    errorMessage: error.message
  })
}
