import { combineReducers } from 'redux'
import sideBarReducer from './sideBarReducer'
import commentReducer from './commentsReducer'
import topReferralsReducers from './topReferralsReducer'
import greetingReducer from './greetingReducer'

import postsReducer from './blogDashboard/analysis/postsReducer'
import pagesReducer from './blogDashboard/analysis/pagesReducer'
import commentsReducer from './blogDashboard/analysis/commentsReducer'
import newCustomersReducer from './blogDashboard/analysis/newCustomersReducer'
import subscribersReducer from './blogDashboard/analysis/subscribersReducer'

export default combineReducers({
  sideBar: sideBarReducer,
  comment: commentReducer,
  referrals: topReferralsReducers,
  greeting: greetingReducer,

  posts: postsReducer,
  pages: pagesReducer,
  comments: commentsReducer,
  newCustomers: newCustomersReducer,
  subscribers: subscribersReducer,
})