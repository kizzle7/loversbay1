/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
import { Button } from "../../Components/Button/Index";
import Plus from "../../Assets/plus-circle-orange.svg";
import { useHistory } from "react-router-dom";
import BackIcon from "../../Assets/left-row.svg";
import PermissionsTable from "../../Components/Tables/Roles/Permissions";
import PencilSqaure from "../../Assets/pencil-square.svg";
import user from "../../Assets/png/user.jpeg";
const Dashboard = () => {
  const history = useHistory();
  return (
    <div>
      <DashboardContainer title="Role & permission">
        <div className="container pt-2">
          <div>
            <div className="d-flex align-items-center">
              <div
                className="pr-2"
                onClick={() => history?.push("/role-management")}
                style={{cursor:'pointer'}}
              >
                <img src={BackIcon} />
              </div>
              <div style={{ color: "#667084" }}>Back</div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-8 col-12">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="font-weight-bold">Sales Head</h4>
                  <div>
                    <img src={PencilSqaure} />
                  </div>
                </div>
                <div className="text-muted">
                  Create a name and description for your rule Create a name and
                  description for your ruleCreate a name and description for
                  your rule Create a name and description for your rule Create a
                  name and description for your rule
                </div>
                <div className="py-3">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      style={{ borderRadius: "10px" }}
                      id="exampleFormControlInput1"
                      placeholder="search features"
                    />
                  </div>
                </div>
                <div>
                  <PermissionsTable />
                </div>
              </div>
              <div className="col-md-4 col-12">
                <h4 className="font-weight-bold">Role members </h4>
                <div className="py-3">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      style={{ borderRadius: "10px" }}
                      id="exampleFormControlInput1"
                      placeholder="search for an individual"
                    />
                  </div>
                </div>
                <div className="card p-1" style={{ borderRadius: "10px" }}>
                  {[1, 2, 3, 4, 5, 6]?.map((d) => {
                    return (
                      <div
                        className="p-3 card mb-1"
                        style={{ borderRadius: "10x" }}
                      >
                        <div className="d-flex justify-content-between">
                          <div>
                            <img
                              src={user}
                              width={40}
                              height={40}
                              style={{ borderRadius: "50%" }}
                            />{" "}
                            <span className="pl-3">Emmanuel Halland</span>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    );
                  })}
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
