import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from 'react-redux'
import { subscribers } from '../../../redux/action-creator/blogDashboard/analysis/subscribersAction'

const Subscribers = ({ chartData, options }) => {

  useEffect(() => {
    subscribers()
    return () => {
      subscribers()
    };
  }, []);

    return (
      <div className="line white-box">
        <div className="analysis">
            <span className="a_name">SUBSCRIBERS</span>
            <h3 className="a_figures">17,281</h3>
            <span className="a_percentage">2.4%</span>
        </div>
        <div className="_chart">
          <Line
            data={chartData}
            options={options}
          />
        </div>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    chartData: state.subscribers.chartData,
    options: state.subscribers.options,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    subscribers: dispatch(subscribers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)
