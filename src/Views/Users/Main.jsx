/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
import { useHistory } from "react-router-dom";
import { Button } from "../../Components/Button/Index";
import Plus from "../../Assets/plus-circle.svg";
import User from "../../Assets/png/user.jpeg";
const Dashboard = () => {
  const history = useHistory();
  return (
    <div>
      <DashboardContainer title="Members">
        <div className="container pt-2">
          <div className="d-flex justify-content-end align-items-center">
            <Button text="Add member" className="amber-btn px-3" icon={Plus} />
          </div>
          <div className="row mt-2">
            <div
              className="col-md-4 mb-3"
              onClick={() => {
                history.push("/member-details");
              }}
            >
              <div className="border-smoke px-5 py-3">
                <div className="font-weight-bold text-center pt-2">
                  <img
                    src={User}
                    style={{
                      height: "75px",
                      width: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <h5 className="text-center font-weight-bold pt-3">Joe jart</h5>
                <div className="text-center text-muted">
                  joe.brenda@presenta.com
                </div>
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="mr-2 border-textx">Super admin</div>
                    <div className="border-textx">Head of finance</div>
                  </div>
                </div>
                <div className="pt-2 pb-4">
                  <Button text="Edit member" className="curve-btn dark-bg" />
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                history.push("/member-details");
              }}
            >
              <div className="border-smoke px-5 py-3">
                <div className="font-weight-bold text-center pt-2">
                  <img
                    src={User}
                    style={{
                      height: "75px",
                      width: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <h5 className="text-center font-weight-bold pt-3">Joe jart</h5>
                <div className="text-center text-muted">
                  joe.brenda@presenta.com
                </div>
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="mr-2 border-textx">Super admin</div>
                    <div className="border-textx">Head of finance</div>
                  </div>
                </div>
                <div className="pt-2 pb-4">
                  <Button text="Edit member" className="curve-btn dark-bg" />
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                history.push("/member-details");
              }}
            >
              <div className="border-smoke px-5 py-3">
                <div className="font-weight-bold text-center pt-2">
                  <img
                    src={User}
                    style={{
                      height: "75px",
                      width: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <h5 className="text-center font-weight-bold pt-3">Joe jart</h5>
                <div className="text-center text-muted">
                  joe.brenda@presenta.com
                </div>
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="mr-2 border-textx">Super admin</div>
                    <div className="border-textx">Head of finance</div>
                  </div>
                </div>
                <div className="pt-2 pb-4">
                  <Button text="Edit member" className="curve-btn dark-bg" />
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              onClick={() => {
                history.push("/member-details");
              }}
            >
              <div className="border-smoke px-5 py-3">
                <div className="font-weight-bold text-center pt-2">
                  <img
                    src={User}
                    style={{
                      height: "75px",
                      width: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <h5 className="text-center font-weight-bold pt-3">Joe jart</h5>
                <div className="text-center text-muted">
                  joe.brenda@presenta.com
                </div>
                <div className="">
                  <div className="d-flex align-items-center">
                    <div className="mr-2 border-textx">Super admin</div>
                    <div className="border-textx">Head of finance</div>
                  </div>
                </div>
                <div className="pt-2 pb-4">
                  <Button text="Edit member" className="curve-btn dark-bg" />
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
