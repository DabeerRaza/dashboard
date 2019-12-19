import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { rightSlide } from '../redux/action-creator/rightSlide'

import $ from 'jquery'

const NavBar = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    $(".dropDown_inner").click(function(){
      $(".sliding").slideToggle();
    });
  }, [])

  const rightSlideHandler = () => {
    dispatch(rightSlide())
  }

  return (
    <div className="row">
      <nav className="navbar fixed-top">
        <div className="col-lg-2 col-md-3 d-none d-lg-block d-md-block">Navbar</div>

        <div className="col-lg-10 col-md-9 col-12">
          <div className="row">
            <div className="col-lg-10 col-md-9 d-none d-lg-block d-md-block">Hello Admin</div>

            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-3 col-5 dropDown">
              <div className="dropDown_inner text-center">
                <img className="" src={require("../assets/images/avatar.JPG")} alt="icon"/>
                <span className="pl-2">ERP Admin</span>
                <i className="fa fa-sort-desc pl-2" aria-hidden="true"></i>              
                <ul className="sliding">
                   <li>Profile</li>
                   <li>Others</li>
                   <li>Logout</li>
                </ul>
              </div>
            </div>
            <div onClick={rightSlideHandler} className="hamburger col-sm-9 col-7 d-xs-block d-sm-block d-md-none">
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
