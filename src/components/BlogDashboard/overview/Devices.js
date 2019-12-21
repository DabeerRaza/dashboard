import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

class Devices extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      chartData: {
        labels: ["Desktop","Tablet","Mobile"],
        datasets: [{
          data: [70, 20, 10],
          backgroundColor: [
            "#197DE8",
            "#7FB7F2",
            "#B2D7FF"
          ]
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'bottom'
        },
      }
    }
  }

  render(){
    return (    
      <div className="col-lg-4 col-md-6 customPadding">
        <div className="row">
          <div className="col-lg-12 white-box">  
            <div className="deviceTitle">
              <h6 className="pl-3 pb-3 pt-3">Users by device</h6>
            </div>  
            <div className="row">
              <div className="col-lg-12 pieChart pt-4 pb-4">
                <Pie
                  data={this.state.chartData}
                  options={this.state.options}
                />
              </div> 
            </div>   
            <div className="deviceBottom pl-3 pt-3 pb-3">
              <select className="deviceOption">
                <option>Last Week</option>
                <option>Today</option>
                <option>Last Month</option>
                <option>Last Year</option>
              </select>
              <span className="deviceReport float-right mr-3">
                <button className="btn">
                  View full report
                  <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                </button>
              </span>
            </div> 
          </div>  
        </div>
      </div>    
    )
  }
}

export default Devices
