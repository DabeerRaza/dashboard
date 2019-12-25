import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { slideLeftRight } from '../redux/action-creator/sideBarAction'
import { checkGreeting } from '../redux/action-creator/greetingAction'

const NavBar = ({ greetingData, greeting, slideLeftRight, token, loggedIn}) => {

  const [check, setCheck] = useState(false)

  useEffect(() => {
    greeting()

    return () => {
      
    }
  }, [greeting])

  const onSlide = () => {
    setCheck(!check)
  }

  const sideBarClickHandler = () => {
    slideLeftRight()
  }

  const logoutHandler = () => {
    token = localStorage.clear("token")
    loggedIn = true
  }

  const slideClass = check ? "slideUp" : "slideDown"

  return (
    <div className="row">
      <nav className="navbar fixed-top">
        <div className="col-lg-2 col-md-3 d-none d-lg-block d-md-block">Navbar</div>

        <div className="col-lg-10 col-md-9 col-12">
          <div className="row">
            <div className="col-lg-10 col-md-9 d-none d-lg-block d-md-block pl-4 helloAdmin">Hello Admin, {greetingData}</div>

            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-3 col-5 dropDown">
              <div className="dropDown_inner text-center" onClick={onSlide}>
                <img className="" src={require("../assets/images/avatar.JPG")} alt="icon"/>
                <span className="pl-2">ERP Admin</span>
                <i className="fa fa-sort-desc pl-2" aria-hidden="true"></i>              
                <ul className={`${slideClass} sliding`}>
                   <li><Link to="/#">Profile</Link></li>
                   <li><Link to="/#">Others</Link></li>
                   <li><button onClick={logoutHandler}>Logout</button></li>
                </ul>
              </div>
            </div>
            <div onClick={sideBarClickHandler} className="hamburger col-sm-9 col-7 d-xs-block d-sm-block d-md-none">
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

const mapStateToProps = state => {
  return {
    greetingData: state.greeting.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    greeting: () => dispatch(checkGreeting()),
    slideLeftRight: () => dispatch(slideLeftRight())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
