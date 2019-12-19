import { combineReducers } from 'redux'
import dropDownReducer from './dropDownReducer'
import leftSlideReducer from './leftSlideReducer'

export default combineReducers({
  dropDownReducer,
  leftSlideReducer
})