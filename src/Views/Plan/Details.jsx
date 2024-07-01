/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
import UsdCircleInfo from "../../Assets/usd-circle.svg";
import UsdCirclePrimary from "../../Assets/dollar-circle-info.svg";
import UsdCircleDanger from "../../Assets/dollar-circle-danger.svg";
import UsdCircleSuccess from "../../Assets/dollar-circle-success.svg";
import TablePaymentManagement from "../../Components/Tables/PaymentManage/TablePaymentManagement";
import { Button } from "../../Components/Button/Index";
import Plus from "../../Assets/plus-circle.svg";
import caretDown from "../../Assets/caret-dwn.svg";
import { Collapse, CardBody, Card } from "reactstrap";
import { Switch } from "antd";
const Dashboard = () => {
  const [isOpen1, setisOpen1] = useState(true)
  const [isOpen2, setisOpen2] = useState(true)

  const toggle = () => setisOpen1(!isOpen1);
  const toggle1 = () => setisOpen2(!isOpen2);

  return (
    <div>
      <DashboardContainer title="Plan management">
        <div className="container pt-3 pb-5 ,b-5">
          <div className="d-flex justify-content-end align-items-center">
            <Button text="Add Plan" className="amber-btn px-3" icon={Plus} />
          </div>
          <div className="row pt-3">
            <div className="col-md-8 col-12">
              <h5 className="font-weight-bold">Basic plan</h5>
              <h4 className="py-2 font-weight-bold">$0</h4>
              <p>Personal + Extended Dataroom +Team Scheduler</p>
              <div className="py-1">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    style={{ borderRadius: "10px" }}
                    id="exampleFormControlInput1"
                    placeholder="search rules"
                  />
                </div>
              </div>
              <div>
                <div className="accord-title accord-border" onClick={toggle}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div
                      className="font-weight-bold "
                      style={{ color: "#667085" }}
                    >
                      General
                    </div>
                    <div>
                      <img src={caretDown} />
                    </div>
                  </div>
                </div>
                <Collapse isOpen={isOpen1}>
                  <div className="accord-body">
                    <div>
                      <div className="d-flex pt-3 justify-content-between align-items-center">
                        <div>
                          <div>Additional User</div>
                          <div className="text-muted">not allowed</div>
                        </div>
                        <div>
                          <div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                      <div className="border-line-dark"></div>
                    </div>
                    <div>
                      <div className="d-flex pt-3 justify-content-between align-items-center">
                        <div>
                          <div>Pool Storage</div>
                          <div className="text-muted">
                            this permission allows to create new user
                          </div>
                        </div>
                        <div>
                          <div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                      <div className="border-line-dark"></div>
                    </div>
                    <div>
                      <div className="d-flex pt-3 justify-content-between align-items-center">
                        <div>
                          <div>Individual file limit</div>
                          <div className="text-muted">
                            this permission allows to create new user
                          </div>
                        </div>
                        <div>
                          <div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                      <div className="border-line-dark"></div>
                    </div>
                  </div>
                </Collapse>

                <div className="accord-title accord-border mt-4" onClick={toggle1}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div
                      className="font-weight-bold "
                      style={{ color: "#667085" }}
                    >
                      Fix management
                    </div>
                    <div>
                      <img src={caretDown} />
                    </div>
                  </div>
                </div>
                <Collapse isOpen={isOpen2}>
                  <div className="accord-body">
                    <div>
                      <div className="d-flex pt-3 justify-content-between align-items-center">
                        <div>
                          <div>Card Approve </div>
                          <div className="text-muted">not allowed</div>
                        </div>
                        <div>
                          <div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                      <div className="border-line-dark"></div>
                    </div>
                    <div>
                      <div className="d-flex pt-3 justify-content-between align-items-center">
                        <div>
                          <div>Card Recommend </div>
                          <div className="text-muted">
                            this permission allows to create new user
                          </div>
                        </div>
                        <div>
                          <div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>
                      <div className="border-line-dark"></div>
                    </div>
                   
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
