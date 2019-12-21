import { GREETING } from '../actions/greeting'

const getGreeting = data => {
  return {
    type: GREETING,
    payload: data
  }
}

export const checkGreeting = () => {
  return dispatch => {

    const hr = new Date().getHours();
    const data = [
      [22, 'Working late'],
      [18, 'Good evening'],
      [12, 'Good afternoon'],
      [5,  'Good morning'],
      [0,  'Whoa, early bird']
    ]
    for (var i = 0; i < data.length; i++) {
        if (hr >= data[i][0]) {
          dispatch(getGreeting(data[i][1]))
        }
      }
  }
}