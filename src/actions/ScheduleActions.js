import {
  DAY_SELECT,
} from './types'

export const daySelect = (day) => {
  return (dispatch) => {
      dispatch({
        type: DAY_SELECT,
        payload: day
      })
  }
}
