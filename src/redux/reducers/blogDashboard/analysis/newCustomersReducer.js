import { NEW_CUSTOMERS } from '../../../actions/blogDashboard/analysis/newCustomersTypes'

const initialState = {
  chartData: {},
  options: {}
}

const newCustomersReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CUSTOMERS:
      return {
        chartData: {
          labels: [1, 7, 14, 21, 28],
          datasets: [
            { 
              label: "Current Month",
              data: [1, 2, 8, 20, 3],
              backgroundColor: "rgba(57,153,255, 0.2)",
              borderColor: "#037DFF",
              borderWidth: 1.5,
              pointRadius: 0
            }
          ],
          text: "23%"
        },
        options: {
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                display: false
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: false
                },
                display: false
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    default: 
      return state
  }
}

export default newCustomersReducer