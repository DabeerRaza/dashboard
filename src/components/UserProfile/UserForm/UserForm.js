import React from 'react'

const UserForm = () => {
  return (
    <form>
      <div className='form-row'>
        <div className='form-group col-md-6 pr-1'>
          <label htmlFor='inputFirstName'>First Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='First Name'
          />
        </div>
        <div className='form-group col-md-6 pl-1'>
          <label htmlFor='inputLastName'>Last Name</label>
          <input type='text' className='form-control' placeholder='Last Name' />
        </div>
      </div>

      <div className='form-row'>
        <div className='form-group col-md-6 pr-1'>
          <label htmlFor='inputEmail4'>Email</label>
          <input
            type='email'
            className='form-control'
            id='inputEmail4'
            placeholder='Email'
          />
        </div>
        <div className='form-group col-md-6 pl-1'>
          <label htmlFor='inputPassword4'>Password</label>
          <input
            type='password'
            className='form-control'
            id='inputPassword4'
            placeholder='Password'
          />
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='inputAddress'>Address</label>
        <input
          type='text'
          className='form-control'
          id='inputAddress'
          placeholder='1234 Main St'
        />
      </div>
      <div className='form-row'>
        <div className='form-group col-md-6 pr-1'>
          <label htmlFor='inputCity rounded'>City</label>
          <input
            type='text'
            className='form-control'
            id='inputCity'
            placeholder='City'
          />
        </div>
        <div className='form-group col-md-4 pl-1 pr-1'>
          <label htmlFor='inputZip'>State</label>
          <select className='form-control'>
            <option>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className='form-group col-md-2 pl-1'>
          <label htmlFor='inputZip'>Zip</label>
          <input
            type='text'
            className='form-control'
            id='inputZip'
            placeholder='Zip'
          />
        </div>
      </div>

      <div className='form-group mb-2'>
        <label htmlFor='exampleFormControlTextarea1'>Description</label>
        <textarea className='form-control rounded-0' rows='5'></textarea>
      </div>

      <button type='submit' className='btn btn-primary p-1 pl-2 pr-2 mb-3'>
        Update Account
      </button>
    </form>
  )
}

export default UserForm
