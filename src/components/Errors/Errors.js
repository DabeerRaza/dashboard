import React from 'react'

const Errors = () => {
  return (
    <div className="row">
      <div className="col-12 text-center errors">
        <h2>500</h2>
        <h3>Something went wrong!</h3>
        <p>There was a problem on our end. Please try again later.</p>
        <button className="btn btn-primary p-1 pl-3 pr-3">
          ← Go Back
        </button>
      </div>
    </div>
  )
}

export default Errors
