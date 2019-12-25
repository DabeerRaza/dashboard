import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from 'react-redux'
import { newCustomers } from '../../../redux/action-creator/blogDashboard/analysis/newCustomersAction'

const NewCustomers = ({ chartData, options }) => {

  useEffect(() => {
    newCustomers()
    return () => {
      newCustomers()
    };
  }, []);

  return (
    <div className="white-box line">
      <div className="analysis">
        <span className="a_name">NEW CUSTOMERS</span>
        <h3 className="a_figures">2,390</h3>
        <span className="a_percentage">4.7%</span>
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
    chartData: state.newCustomers.chartData,
    options: state.newCustomers.options,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newCustomers: dispatch(newCustomers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomers)
