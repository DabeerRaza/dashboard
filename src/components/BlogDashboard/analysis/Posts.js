import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from 'react-redux'
import { posts } from '../../../redux/action-creator/blogDashboard/analysis/postsAction'

const Posts = ({ chartData, options }) => {

  useEffect(() => {
    posts()
    return () => {
      posts()
    };
  }, []);

  return (
    <div className="white-box line">
      <div className="analysis">
        <span className="a_name">POSTS</span>
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
    chartData: state.posts.chartData,
    options: state.posts.options,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    posts: dispatch(posts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
