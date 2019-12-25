import { SLIDE_LEFT_RIGHT } from '../actions/sideBar'

const initialState = {
  sideBarStatus: false
}

const sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDE_LEFT_RIGHT:
      return {        
        sideBarStatus: !state.sideBarStatus
      }
  
    default:
      return state
  }
}

export default sideBarReducer