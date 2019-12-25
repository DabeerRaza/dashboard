import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../../redux/action-creator/commentsAction";

const Discussion = ({ commentData, fetchComments }) => {

  useEffect(() => {
    fetchComments()

    return () => {
      fetchComments()
    }
  }, [fetchComments]);

  return (
    <div className="col-lg-5 col-md-12 discussion">
      <div className="row">
        <div className="col-lg-12 white-box">
          <div className="discussionTitle">
            <h6 className="pl-3 pt-3 pb-3">Discussions</h6>
          </div>
          <div className="discussionContainer">
            {commentData.loading ? (
              <div className="row p-2">Loading...</div>
            ) : (
              commentData.comments.map((comment) => {
                return (
                  <div className="row comments_row p-2" key={comment.id}>
                    <div className="col-2 commentImgContainer p-1">
                      <img
                        src={require("../../../assets/images/avatar.JPG")}
                        alt={"commenterPic"}
                      />
                    </div>
                    <div className="col-10 commentContainer p-2">
                      <span className="commentHeading">{comment.email}</span>
                      <span className="commentTime"> - 10: 10 am</span>
                      <p className="commentPara pb-2 pt-1">
                        {comment.body.length && comment.body.substr(0, 60)} ...
                      </p>
                      <div className="commentButtonContainer">
                        <button className="btn p-1">
                          <i></i>
                          Approve
                        </button>
                        <button className="btn p-1">
                          <i></i>
                          Reject
                        </button>
                        <button className="btn p-1">
                          <i></i>
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="discussionViewAll text-center">
            <button className="btn btn-default ml-3 mt-3 mb-3 p-2">
              View All Comments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    commentData: state.comment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discussion);
