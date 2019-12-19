import React from "react";
import UserForm from "../UserForm/UserForm";

const UserProfile = () => {
  return (
    <div className="row">
      <div className="col-12">
        <span> OVERVIEW </span>
        <h4> User Profile </h4>
      </div>
      <div className="col-4">
        <div className="UserProfile mr-3">
          <div className="UserName_container text-center">
            <img src="images/avatar.jpg" alt="avatar" />
            <h4>Sierra Brooks</h4>
            <h6>Project Manager</h6>
            <button type="button" className="btn btn-outline-primary">
              Primary
            </button>
          </div>
          <div className="workload">
            <span>Workload</span>
            <span className="float-right">74%</span>
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
          </div>
          <div className="description">
            <h6>Description</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?
            </p>
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="ml-3 userForm">
          <div className="formTitle">
            <h6>Account Details</h6>
          </div>
          <div className="userForm_container">
            <UserForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
