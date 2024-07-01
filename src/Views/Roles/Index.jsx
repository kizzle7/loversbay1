/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
import { Button } from "../../Components/Button/Index";
import Plus from "../../Assets/plus-circle-orange.svg";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  return (
    <div>
      <DashboardContainer title="Role & permission">
        <div className="container pt-2">
          <div className="d-flex justify-content-end align-items-center">
            <Button
              text="Add new role"
              className="amber-btn px-3"
              onClick={() => {
                history?.push("/add-role");
              }}
            />
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div
                className="card py-3 px-3"
                style={{ borderRadius: "10px", border: "1px solid #D9DBE0" }}
              >
                <div className="d-flex text-muted-feint font-weight-bold justify-content-between align-items-center pb-1">
                  <div className="">Admin</div>
                  <div>
                    25 members <img src={Plus} />{" "}
                  </div>
                </div>
                <div className="mb-3 text-muted pt-2">
                  This rule is for every card that doesn’t have a rule attached
                  to them. This rule is for every card that doesn’t have a rule
                  attached to them.attached to them.
                </div>
                <div className="py-3">
                  <Button
                    text="View Permissions"
                    className=""
                    onClick={() => {
                      history.push("/role-permissions");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card py-3 px-3"
                style={{ borderRadius: "10px", border: "1px solid #D9DBE0" }}
              >
                <div className="d-flex text-muted-feint font-weight-bold justify-content-between align-items-center pb-1">
                  <div className="">Admin</div>
                  <div>
                    25 members <img src={Plus} />{" "}
                  </div>
                </div>
                <div className="mb-3 text-muted pt-2">
                  This rule is for every card that doesn’t have a rule attached
                  to them. This rule is for every card that doesn’t have a rule
                  attached to them.attached to them.
                </div>
                <div className="py-3">
                  <Button text="View Permissions" className="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card py-3 px-3"
                style={{ borderRadius: "10px", border: "1px solid #D9DBE0" }}
              >
                <div className="d-flex text-muted-feint font-weight-bold justify-content-between align-items-center pb-1">
                  <div className="">Admin</div>
                  <div>
                    25 members <img src={Plus} />{" "}
                  </div>
                </div>
                <div className="mb-3 text-muted pt-2">
                  This rule is for every card that doesn’t have a rule attached
                  to them. This rule is for every card that doesn’t have a rule
                  attached to them.attached to them.
                </div>
                <div className="py-3">
                  <Button text="View Permissions" className="" />
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
