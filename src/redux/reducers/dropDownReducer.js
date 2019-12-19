import { SLIDE_DOWN } from '../actions/dropDownAction'
import { SLIDE_UP } from '../actions/dropDownAction'

const initialState = {
  sliding: "slideUp"
}

const dropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDE_UP:
      return {
        sliding: "slideUp"
      }
    case SLIDE_DOWN:
      return {        
        sliding: "slideDown"
      }
    default:
      return state
  }
}

export default dropDownReducer