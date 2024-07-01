/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
import { Button } from "../../Components/Button/Index";
import { Input } from "../../Components/Input/Index";
import { TextArea } from "../../Components/Input/TextArea";
import { Steps } from "antd";
import caretDown from "../../Assets/caret-dwn.svg";
import { Collapse, CardBody, Card } from "reactstrap";
import { Switch } from "antd";
const Dashboard = () => {
  const [current, setCurrent] = useState(0);
  const [isOpen1, setisOpen1] = useState(true);
  const [isOpen2, setisOpen2] = useState(true);

  const toggle = () => setisOpen1(!isOpen1);
  const toggle1 = () => setisOpen2(!isOpen2);
  const items = [
    {
      title: 'Basic Information',
    },
    {
      title: 'Set Permissions',
    },
    {
      title: 'Summary',
      
    },
  ];
  return (
    <div>
      <DashboardContainer title="Role & permission">
        <div className="container pt-2">
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="d-flex justify-content-center aliggn">
                <div className="w-75">
                  <div>
                    <Steps
                      current={current}
                      percent={80}
                      size="small"
                      labelPlacement="vertical"
                      items={items}
                    />
                  </div>
                  <br />
                  {current === 0 && (
                    <div>
                      <div className="border-smoke py-3 px-3 mt-4">
                        <h4 className="font-weight-bold">Basic Information</h4>
                        <div className="text-muted-feint">
                          Create a name and description for your rule
                        </div>
                      </div>
                      <br />
                      <div>
                        <div className="mb-3">
                          <Input label="Role Name" placeholder="Sales Head" />
                        </div>
                        <div className="mb-3">
                          <TextArea
                            rows="20"
                            cols="5"
                            label="Description"
                            placeholder="Description"
                          />
                        </div>
                        <Button text="Next" className="amber-btn" onClick={() => setCurrent(1)} />
                      </div>
                    </div>
                  )}
                  {current === 1 && (
                    <div>
                      <div className="">
                        <div className="">
                          <h5 className="font-weight-bold">Super Admin</h5>
                          <div className="text-muted">
                            Create a name and description for your rule Create a
                            name and description for your ruleCreate a name and
                            description for your rule Create a name and
                            description for your rule Create a name and
                            description for your rule
                          </div>
                          <div className="py-3">
                            <div class="mb-3">
                              <input
                                type="text"
                                class="form-control"
                                style={{ borderRadius: "10px" }}
                                id="exampleFormControlInput1"
                                placeholder="search permissions"
                              />
                            </div>
                          </div>
                          <div>
                            <div
                              className="accord-title accord-border"
                              onClick={toggle}
                            >
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
                                      <div>Can create User</div>
                                      <div className="text-muted">
                                        not allowed
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
                                      <div>Can Update</div>
                                      <div className="text-muted">
                                        this permission allows to create new
                                        user
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
                                      <div>Can delete</div>
                                      <div className="text-muted">
                                        this permission allows to create new
                                        user
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

                            <div
                              className="accord-title accord-border mt-4"
                              onClick={toggle1}
                            >
                              <div className="d-flex justify-content-between align-items-center">
                                <div
                                  className="font-weight-bold "
                                  style={{ color: "#667085" }}
                                >
                                  Permissions
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
                                      <div>Can create Team </div>
                                      <div className="text-muted">
                                        not allowed
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
                                      <div>Can Update </div>
                                      <div className="text-muted">
                                        not allowed
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
                        <br />
                        <div className="d-flex align-items-center">
                            <Button text="Previous"  className="amber-btn" onClick={() =>  setCurrent(0)}/>
                            <Button text="Create Role"  className="amber-btn ml-3"/>

                        </div>
                        <br />
                        <br />
                      </div>
                    </div>
                  )}
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
