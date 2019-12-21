import { combineReducers } from 'redux'
import dropDownReducer from './dropDownReducer'
import leftSlideReducer from './leftSlideReducer'
import commentsReducer from './commentsReducer'
import topReferralsReducers from './topReferralsReducer'
import greetingReducer from './greetingReducer'

export default combineReducers({
  dropDownReducer,
  leftSlideReducer,
  comments: commentsReducer,
  referrals: topReferralsReducers,
  greeting: greetingReducer
})