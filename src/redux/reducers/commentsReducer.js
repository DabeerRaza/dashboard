import { REQUEST_COMMENTS,
  SUCCESS_COMMENTS,
  FAILURE_COMMENTS
} from '../actions/commentsAction'

const initialState = {
  loading: false,
  comments: [],
  error: ''
}

const commentsReducers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMMENTS:
      return {
        ...state,
        loading: true
      }
    case SUCCESS_COMMENTS:
      return {
        loading: false,
        comments: action.payload,
        error: ''
      }
    case FAILURE_COMMENTS:
      return {
        loading: false,
        comments: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default commentsReducers