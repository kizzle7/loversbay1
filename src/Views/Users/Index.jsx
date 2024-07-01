/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
import UsdCircleInfo from "../../Assets/usd-circle.svg";
import UsdCirclePrimary from "../../Assets/dollar-circle-info.svg";
import UsdCircleDanger from "../../Assets/dollar-circle-danger.svg";
import UsdCircleSuccess from "../../Assets/dollar-circle-success.svg";
import TablePaymentManagement from "../../Components/Tables/PaymentManage/TablePaymentManagement";
import BackIcon from "../../Assets/left-row.svg";
import CaseArchive from "../../Assets/case-archive.svg";
import MoreIcon from "../../Assets/Moreicon.svg";
import User from "../../Assets/png/user.jpeg";
import Sms from "../../Assets/sms.svg";
import "./index.css";
import Caller from "../../Assets/caller.svg";
import Award from "../../Assets/award.svg";
import { Tabs, Progress } from "antd";
import Cal from "../../Assets/cal.svg";
const Dashboard = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Payment History",
      children: "",
    },
    {
      key: "2",
      label: "Team Members",
      children: "",
    },
    {
      key: "3",
      label: "Directory list",
      children: "",
    },
    {
      key: "4",
      label: "Activity log",
      children: "",
    },
  ];

  const twoColors = {
    "30%": "#FF6929",
    "35%": "#FF9B70",
    "45%": "#FFD1BD",
    "100%": "#E6E8EE",
  };

  return (
    <div>
      <DashboardContainer title="Users > Details">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="pr-2">
                      <img src={BackIcon} />
                    </div>
                    <div style={{ color: "#667084" }}>Back</div>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <div className="border-button">
                      <div className="d-flex align-items-center">
                        <div>
                          {" "}
                          <img src={CaseArchive} />
                        </div>
                        <div className="pl-2"> Suspend User</div>
                      </div>{" "}
                    </div>
                    <div className="border-button ml-2">
                      <img src={MoreIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 pt-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div className="pr-3">
                      <div className="img-round">
                        <img
                          src={User}
                          style={{
                            height: "55px",
                            width: "55px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold">Johnny Halland</div>
                      <div className="d-flex align-items-center">
                        <div className="pr-2">
                          <img src={Sms} />
                        </div>
                        <div>Jonny.halland@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex pt-4 justify-content-between align-items-center">
                    <div>
                      {" "}
                      <img src={Caller} className="pr-2" />
                      08106127172
                    </div>
                    <div>
                      {" "}
                      <img src={Award} className="pr-2" />
                      Basic Plan
                    </div>
                    <div>
                      {" "}
                      <img src={Cal} className="pr-2" />
                      25/March/2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 py-4">
              <div className="border-smoke">
                <div
                  className="card py-3 px-3"
                  style={{ border: "1px solid white" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>Storage</div>
                    <div>4GB of 6GB used</div>
                  </div>
                  <div>
                    <Progress percent={100} strokeColor={twoColors} />
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-bottom">
                        <div className="badge-box-1"></div>
                        <div className="pl-1">60% on Images</div>
                      </div>
                      <div className="pl-3 d-flex align-items-bottom">
                        <div className="badge-box-2"></div>
                        <div className="pl-1">30% on pdf</div>
                      </div>
                      <div className="pl-3 d-flex align-items-bottom">
                        <div className="badge-box-3"></div>
                        <div className="pl-1">15% on presentation</div>
                      </div>
                      <div className="pl-3 d-flex align-items-bottom">
                        <div className="badge-box-4"></div>
                        <div className="pl-1">15% free space</div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                inkBarColor={"#A0A3BD"}
                itemColor={"#A0A3BD"}
                itemHoverColor={"#000000"}
                itemSelectedColor={"#000000"}
                itemActiveColor={"#000000"}
              />
              <TablePaymentManagement />
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
