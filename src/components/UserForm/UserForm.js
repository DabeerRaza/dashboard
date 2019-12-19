import React from 'react'

const UserForm = () => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputFirstName">First Name</label>
          <input type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputLastName">Last Name</label>
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>  
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">State</label>
          <select className="form-control">
            <option>Choose...</option>
            <option>...</option>            
          </select>
        </div>      
        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Description</label>
        <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="4"></textarea>
      </div>

      <button type="submit" className="btn btn-primary">Update Account</button>
    </form>
  )
}

export default UserForm
