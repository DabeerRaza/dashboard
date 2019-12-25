import React from "react";
import UserForm from "./UserForm/UserForm";

const UserProfile = () => {
  return (
    <div className="row">
      <div className="col-12 mb-4">
        <span> OVERVIEW </span>
        <h4> User Profile </h4>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="UserProfile">
          <div className="UserName_container text-center">
            <img src={require("../../assets/images/avatar.JPG")} alt="avatar" />
            <h4 className="mt-3">Sierra Brooks</h4>
            <span>Project Manager</span>
            <button type="button" className="mt-2 btn btn-outline-primary p-1 pl-2 pr-2">
              <i className="fas fa-user"></i>
              Follow
            </button>
          </div>
          <div className="workload">
            <span>Workload</span>
            <span className="float-right">74%</span>
            <div className="progress mt-2">
              <div className="progress-bar"></div>
            </div>
          </div>
          <div className="description">
            <h6 className="mb-3">Description</h6>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-12">
        <div className="userForm">
          <div className="formTitle">
            <h6 className="p-3">Account Details</h6>
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
