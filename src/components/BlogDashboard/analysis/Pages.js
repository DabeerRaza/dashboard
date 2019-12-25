import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from 'react-redux'
import { pages } from '../../../redux/action-creator/blogDashboard/analysis/pagesAction'


const Pages = ({ chartData, options }) => {

  useEffect(() => {
    pages()
    return () => {
      pages()
    };
  }, []);

  return (
    <div className="white-box line">
      <div className="analysis">
          <span className="a_name">PAGES</span>
          <h3 className="a_figures">182</h3>
          <span className="a_percentage">12.4%</span>
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
    chartData: state.pages.chartData,
    options: state.pages.options,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pages: dispatch(pages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages)
