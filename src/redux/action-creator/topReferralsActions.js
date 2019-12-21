import { REQUEST_REFERRALS,
         SUCCESS_REFERRALS,
         FAILURE_REFERRALS
       } from '../actions/topReferrals'
import axios from 'axios'

const requestReferrals = () => {
  return {
    type: REQUEST_REFERRALS
  }
}

const successReferrals = comment => {
  return {
    type: SUCCESS_REFERRALS,
    payload: comment
  }
}

const failureReferrals = error => {
  return {
    type: FAILURE_REFERRALS,
    payload: error
  }
}

export const fetchReferrals = () => {
  return dispatch => {
    dispatch(requestReferrals())
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const comments = response.data.slice(0, 8)
        dispatch(successReferrals(comments))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(failureReferrals(errorMsg))
      })
  }
}


