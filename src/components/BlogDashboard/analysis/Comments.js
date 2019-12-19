import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [1, 7, 14, 21, 28],
        datasets: [
          {
            label: "Current Month",
            data: [10, 20, 80, 20, 30, 40, 20, 29, 20, 40, 20, 29, 20],
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
    };
  }

  render() {
    return (
      <div className="line white-box">
        <div className="analysis">
            <span className="a_name">COMMENTS</span>
            <h3 className="a_figures">8,147</h3>
            <span className="a_percentage">3.8%</span>
        </div>
        <div className="_chart">
          <Line
            data={this.state.chartData}
            options={this.state.options}
          />
        </div>
      </div>
    );
  }
}

export default Comments;
