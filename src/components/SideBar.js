import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {leftSlide} from '../redux/action-creator/leftSlide'

const SideBar = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 0)
  const slideLeft = useSelector(state => state.leftSlideReducer.slideLeft)
  const slideRight = useSelector(state => state.leftSlideReducer.slideRight)

  const dispatch = useDispatch()

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

  const addClass = () => {
    dispatch(leftSlide())
  }

  
  const navItemHandler = e => {
    e.target.className = "active"
    if(isMobile){
      return dispatch(leftSlide())
    }
  }

  const className = isMobile ? slideLeft : ""
  const toggle = slideRight ? "slideRight" : ""

  return (
    <div className="row">
      <div className={`${className} ${toggle} sideBar col-lg-2 col-md-3`}>
        <div className="row sideBar-top-row">
          <div className="sideBar-top-row_inner col-md-12 col-10">
            <img className="sideBar-top-img" src={require("../assets/images/favicon.png")} alt="logo"/>            
          </div>
          <div className="col-2 d-xs-block d-sm-block d-md-none arrow" onClick={addClass}>
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </div>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              exact 
              to="/sale-purchase-dashboard"
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
              to="/sale-purchase-dashboard/blog-posts"
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
              to="/sale-purchase-dashboard/add-new-post"
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
              to="/sale-purchase-dashboard/forms-and-components"
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
              to="/sale-purchase-dashboard/tables"
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
              to="/sale-purchase-dashboard/user-profile"
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
              to="/sale-purchase-dashboard/errors"
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

export default SideBar
