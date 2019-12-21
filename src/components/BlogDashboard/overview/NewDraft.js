import React from 'react'

const NewDraft = () => {
    return (
      <div className="col-lg-4 col-md-6 newDraft">
        <div className="row">
          <div className="col-lg-12 white-plain-box">
            <div className="newDraftTitle">
              <h6 className="pl-3 pt-3 pb-3">New Draft</h6>
            </div>
            <div className="draftFormContainer p-3">
              <form>
                <input type="text" className="form-control mb-3 pl-3" placeholder="Brave New World" />
                <textarea className="form-control mb-3 pl-3" placeholder="Worlds can be like X-rays if you use them properly" ></textarea>
                <button className="btn btn-primary p-2">Create Draft</button>
              </form>
            </div>                   
          </div>
        </div>
      </div>
    )
}

export default NewDraft
