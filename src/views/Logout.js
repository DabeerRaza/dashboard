import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Logout extends Component {

  constructor(props) {
    super(props)
 
    this.state = {
       navigate: false
    }
  }

  render(){

    const { navigate } = this.state

    if(navigate){
      return <Redirect to="/login" push={true} />
    }

    return(
      <div>

      </div>
    )
  }
}

export default Logout
 