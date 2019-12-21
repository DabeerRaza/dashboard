import { REQUEST_REFERRALS,
         SUCCESS_REFERRALS,
         FAILURE_REFERRALS
       } from '../actions/topReferrals'

const initialState = {
  loading: false,
  referrals: [],
  error: ''
}

const topReferralsReducers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_REFERRALS:
      return {
        ...state,
        loading: true
      }
    case SUCCESS_REFERRALS:
      return {
        loading: false,
        referrals: action.payload,
        error: ''
      }
    case FAILURE_REFERRALS:
      return {
        loading: false,
        referrals: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default topReferralsReducers