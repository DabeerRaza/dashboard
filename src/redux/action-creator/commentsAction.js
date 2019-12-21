import { REQUEST_COMMENTS,
         SUCCESS_COMMENTS,
         FAILURE_COMMENTS
       } from '../actions/commentsAction'
import axios from 'axios'

const requestComments = () => {
  return {
    type: REQUEST_COMMENTS
  }
}

const successComments = comment => {
  return {
    type: SUCCESS_COMMENTS,
    payload: comment
  }
}

const failureComments = error => {
  return {
    type: FAILURE_COMMENTS,
    payload: error
  }
}

export const fetchComments = () => {
  return dispatch => {
    dispatch(requestComments())
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        const comments = response.data.slice(0, 3)
        dispatch(successComments(comments))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(failureComments(errorMsg))
      })
  }
}


