import { LEFT_SLIDE } from '../actions/leftSlideAction'
import { RIGHT_SLIDE } from '../actions/rightSlideAction'

const initialState = {
  slideLeft: "",
  slideRight: false
}

const leftSlideReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEFT_SLIDE:
      return {
        slideLeft: "slideLeft"
      }
    case RIGHT_SLIDE:
      return {
        slideRight: !state.slideRight
      }
    default:
      return state
  }
}

export default leftSlideReducer