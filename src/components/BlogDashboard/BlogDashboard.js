import React from "react";
import Posts from "./analysis/Posts";
import Pages from "./analysis/Pages";
import Comments from "./analysis/Comments";
import NewCustomers from "./analysis/NewCustomers";
import Subscribers from "./analysis/Subscribers";
import Overview from "./overview/Overview";
import Devices from "./overview/Devices";

const BlogDashboard = () => {
  return (
    <>
      <div className="row">
        <div className="blogDashboard col-12">
          <span>DASHBOARD</span>
          <h3>Blog Overview</h3>
        </div>
      </div>
      <div className="row analysis_row">
        <div className="posts">
          <Posts />
        </div>
        <div className="pages">
          <Pages />
        </div>
        <div className="comments">
          <Comments />
        </div>
        <div className="newCustomers">
          <NewCustomers />
        </div>
        <div className="subscribers">
          <Subscribers />
        </div>
      </div>
      
      <div className="row overview_row">
        <Overview />
        <Devices />
      </div>
    </>
  );
};

export default BlogDashboard;
