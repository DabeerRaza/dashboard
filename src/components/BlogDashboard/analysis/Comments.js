import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from 'react-redux'
import { comments } from '../../../redux/action-creator/blogDashboard/analysis/commentsAction'

const Comments = ({ chartData, options }) => {

  useEffect(() => {
    comments()
    return () => {
      comments()
    };
  }, []);

  return (
    <div className="white-box line">
      <div className="analysis">
        <span className="a_name">COMMENTS</span>
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
    chartData: state.comments.chartData,
    options: state.comments.options,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    comments: dispatch(comments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
