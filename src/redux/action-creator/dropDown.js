import { SLIDE_UP } from '../actions/dropDownAction'
import { SLIDE_DOWN } from '../actions/dropDownAction'

export const slideUp = () => {
  return {
    type: SLIDE_UP
  }
}

export const slideDown = () => {
  return {
    type: SLIDE_DOWN
  }
}

