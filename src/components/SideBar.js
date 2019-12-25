import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { slideLeftRight } from '../redux/action-creator/sideBarAction'

const SideBar = ({ sideBarStatus, slideLeftRight }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 0 || window.innerWidth < 767)
  
  useEffect(() => {
    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 767)
    }, false);
    return () => {
      window.addEventListener('resize', () => {
          setIsMobile(window.innerWidth < 767)
      }, false);
    }
  }, [])

  const sideBarHandler = () => {
    slideLeftRight()
  }

  const navItemHandler = e => {
    e.target.className = "active"
      slideLeftRight()
  }

  
  const sideBarClass = sideBarStatus ? "slideRight" : "slideLeft"
  const sideBarMobile = isMobile ? sideBarClass : ""

  return (
    <div className="row">
      <div className={`${sideBarMobile} sideBar col-lg-2 col-md-3`}>
        <div className="row sideBar-top-row">
          <div className="sideBar-top-row_inner col-md-12 col-10">
            <img className="sideBar-top-img" src={require("../assets/images/favicon.png")} alt="logo"/>            
          </div>
          <div className="col-2 d-xs-block d-sm-block d-md-none arrow" onClick={sideBarHandler}>
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </div>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              exact 
              to="/auth-users/blog-dashboard"
              className=""
              onClick={e => navItemHandler(e)}
              onBlur={e => e.target.className = ""}
            >
              <i className="fa fa-pencil mr-2" aria-hidden="true"></i>
              Blog Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact 
              to="/auth-users/blog-posts"
              className=""
              onClick={e => navItemHandler(e)}
              onBlur={e => e.target.className = ""}
            >
              <i className="fa fa-rss-square mr-2" aria-hidden="true"></i>
              Blog Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact 
              to="/auth-users/add-new-post"
              className=""
              onClick={e => navItemHandler(e)}
              onBlur={e => e.target.className = ""}
            >
              <i className="fa fa-file mr-2" aria-hidden="true"></i>
              Add New Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact 
              to="/auth-users/forms-and-components"
              className=""
              onClick={e => navItemHandler(e)}
              onBlur={e => e.target.className = ""}
            >
              <i className="fa fa-th mr-2" aria-hidden="true"></i>
              Forms And Components
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact 
              to="/auth-users/tables"
              className=""
              onClick={e => navItemHandler(e)}
              onBlur={e => e.target.className = ""}
            >
              <i className="fa fa-table mr-2" aria-hidden="true"></i>
              Tables
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact 
              to="/auth-users/user-profile"
              className=""
              onClick={e => navItemHandler(e)}
              onBlur={e => e.target.className = ""}
            >
              <i className="fa fa-user mr-2" aria-hidden="true"></i>
              User Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact 
              to="/auth-users/errors"
              className=""
              onClick={e => navItemHandler(e)}
              onBlur={e => e.target.className = ""}
            >
              <i className="fa fa-exclamation-circle mr-2" aria-hidden="true"></i>
              Errors
            </NavLink>
          </li>
        </ul>           
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sideBarStatus: state.sideBar.sideBarStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    slideLeftRight: () => dispatch(slideLeftRight())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
