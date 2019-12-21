import React, {useEffect} from 'react'
import { connect } from "react-redux";
import { fetchReferrals } from "../../../redux/action-creator/topReferralsActions";

const Referrals = ({ referralsData, fetchReferrals }) => {

  useEffect(() => {
    fetchReferrals()

    return () => {
      fetchReferrals()
    }
  }, [fetchReferrals]);  

    return (
      <div className="col-lg-3 col-md-12 referrals">
        <div className="row">
          <div className="col-lg-12 white-box">
            <div className="referralsTitle">
              <h6 className="pl-3 pt-3 pb-3">Top Referrals</h6>
            </div>
            <div className="referralsContainer pb-2">
              {
                referralsData.loading ? (
                  <div className="row">Loading...</div>
                ) : (
                  referralsData.referrals.map(referral => {
                    return (
                      <div className="row pl-3 pr-3 p-2 border-bottom" key={referral.id}>
                        <div className="col-12">
                          <span className="">{referral.website}</span>
                          <span className="float-right">{referral.address.zipcode}</span>
                        </div>
                      </div>
                    )
                  })
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
}
const mapStateToProps = state => {
  return {
    referralsData: state.referrals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReferrals: () => dispatch(fetchReferrals())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Referrals)
