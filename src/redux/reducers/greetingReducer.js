import { GREETING } from '../actions/greeting'

const initialState = {
  data: []
}

const greetingReducers = (state = initialState, action) => {
  switch (action.type) {
    case GREETING:
      return {
        data: action.payload
      }
  
    default:
      return {
        state
      }
  }
}

export default greetingReducers