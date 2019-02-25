import firebase from '../Firebase'
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL
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
        console.log(error.code)
        console.log(error.message)
        getEmployeesFail(dispatch)
      })
  }
}

const getEmployeesSuccess = (dispatch, employees) => {
    dispatch({
      type: GET_EMPLOYEES_SUCCESS,
      payload: employees
    })
}

const getEmployeesFail = (dispatch) => {
    dispatch({
      type: GET_EMPLOYEES_FAIL
    })
}
