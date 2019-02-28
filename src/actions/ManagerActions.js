import firebase from '../Firebase'
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  GET_EMPLOYER_ID,
  GET_EMPLOYER_ID_SUCCESS,
  GET_EMPLOYER_ID_FAIL,
  SELECT_EMPLOYEE
} from './types'

export const getEmployees = () => {
  return (dispatch) => {
    dispatch({ type: GET_EMPLOYEES })

    let employeeArray = []
    const userID = firebase.auth().currentUser.uid
    const userDB = firebase.firestore().collection('users')
    userDB.where('manager', '==', userDB.doc(userID)).get()
      .then( employees => {
        employees.forEach( employee => {
          employeeArray.push(employee.data())
        })
        getEmployeesSuccess(dispatch, employeeArray)
      })
      .catch( error => {
        getEmployeesFail(dispatch, error)
      })
  }
}

const getEmployeesSuccess = (dispatch, employees) => {
    dispatch({
      type: GET_EMPLOYEES_SUCCESS,
      payload: employees
    })
}

const getEmployeesFail = (dispatch, error) => {
    dispatch({
      type: GET_EMPLOYEES_FAIL,
      payload: error.code + ' ||| ' + error.message
    })
}

export const getEmployerID = () => {
  return (dispatch) => {
    dispatch({ type: GET_EMPLOYER_ID })
    const user = firebase.auth().currentUser
    firebase.firestore().collection('users').doc(user.uid).get()
      .then( doc => {
        getEmployerIDSuccess(dispatch, doc.data().managerID)
      })
      .catch( error => {
        getEmployerIDFail(dispatch, error)
      })
  }
}

const getEmployerIDSuccess = (dispatch, id) => {
  dispatch({
    type: GET_EMPLOYER_ID_SUCCESS,
    payload: id
  })
}

const getEmployerIDFail = (dispatch, error) => {
    dispatch({
      type: GET_EMPLOYER_ID_FAIL,
      payload: error.code + ' ||| ' + error.message
    })
}

export const selectEmployee = (employee) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_EMPLOYEE,
      payload: employee
    })
  }
}
