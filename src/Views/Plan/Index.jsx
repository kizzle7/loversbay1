/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
import { useHistory } from "react-router-dom";
import { Button } from "../../Components/Button/Index";
import Plus from "../../Assets/plus-circle.svg";
const Dashboard = () => {
  const history = useHistory();
  return (
    <div>
      <DashboardContainer title="Plan management">
        <div className="container pt-3">
          <div className="d-flex justify-content-end align-items-center">
            <Button text="Add Plan" className="amber-btn px-3" icon={Plus} />
          </div>
          <div className="row pt-3">
            <div
              className="col-md-3"
              onClick={() => {
                history.push("/plan-details");
              }}
            >
              <div className="card py-3 px-2" style={{ borderRadius: "10px", cursor:'pointer' }}>
                <h4 className="font-weight-bold text-center">$0</h4>
                <h5 className="text-center">Basic</h5>
                <div className=" text-center text-muted">25 permissions</div>
                <div className="pt-3">
                  <Button text="Edit Plan" className="curve-btn" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card py-3 px-2" style={{ borderRadius: "10px" }}>
                <h4 className="font-weight-bold text-center">$0</h4>
                <h5 className="text-center">Personal</h5>
                <div className=" text-center text-muted">25 permissions</div>
                <div className="pt-3">
                  <Button text="Edit Plan" className="curve-btn" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card py-3 px-2" style={{ borderRadius: "10px" }}>
                <h4 className="font-weight-bold text-center">$0</h4>
                <h5 className="text-center">Business</h5>
                <div className=" text-center text-muted">25 permissions</div>
                <div className="pt-3">
                  <Button text="Edit Plan" className="curve-btn" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card py-3 px-2" style={{ borderRadius: "10px" }}>
                <h4 className="font-weight-bold text-center">$0</h4>
                <h5 className="text-center">Agency</h5>
                <div className=" text-center text-muted">25 permissions</div>
                <div className="pt-3">
                  <Button text="Edit Plan" className="curve-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
