import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class Overview extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       chartData: {
         labels: [1, 7, 14, 21, 28],
         datasets: [
           {
             label: 'Current Month',
             data: [ 10, 20, 80, 20, 30, 40, 20, 29, 20, 40, 20, 29, 20 ],
             backgroundColor : "rgba(57,153,255, 0.2)",
             borderColor: "#037DFF",
             borderWidth: 1.5,
             pointRadius: 0
           },
           {
            label: 'Past Month',
            data: [ 0, 5, 10, 20, 30, 40, 20, 29, 20, 40, 20, 29, 20 ],
            backgroundColor: "rgba(255,150,172, 0.2)",
            borderColor: "#E55F8B",
            borderDash: [2.7],
            borderWidth: 1.5,
            pointRadius: 0
          }
         ]
      },
      options: {
        scales: {
          xAxes: [{
             gridLines: {
                display: false
             }
          }]
       },
       responsive: true
      }
    }
  }



  render(){
    return (
      <div className="col-lg-8 col-md-12 overview">
        <div className="row">
          <div className="col-lg-12 white-box">
            <div className="overviewTitle">
              <h6 className="pl-3 pt-3 pb-3">Users Overview</h6>
            </div>
            <div className="overviewDate pt-2 pb-2">
              <span className="ml-3 oDateContainer">
                <input type="text" placeholder="Start Date" />
                <input type="text" placeholder="End Date" />                
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </span>
              <span className="float-right mr-3">
                <button type="button" className="btn reportBtn">
                  View Full Report
                  <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                </button>
              </span>
            </div>
            <div className="overviewChart">
              <Line
                data={this.state.chartData}
                options={this.state.options}
              />
            </div>            
          </div>
        </div>
      </div>
    )
  }
}

export default Overview
