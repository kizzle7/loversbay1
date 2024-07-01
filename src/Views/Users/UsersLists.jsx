/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
import users from "../../Assets/users.svg";
import UsersList from "../../Components/Tables/Users/usersList";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
const Dashboard = () => {
  return (
    <div>
      <DashboardContainer title="Users">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-3">
              <div className="card py-3 px-3" style={{ borderRadius: "10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="pr-1">
                      <img src={users} />
                    </div>
                    <div>Total Users</div>
                  </div>
                  <h4 className="font-weight-bold">30</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card py-3 px-3" style={{ borderRadius: "10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="pr-1">
                      <img src={users} />
                    </div>
                    <div>Active Users </div>
                  </div>
                  <h4 className="font-weight-bold">30</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card py-3 px-3" style={{ borderRadius: "10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="pr-1">
                      <img src={users} />
                    </div>
                    <div>Suspended Users </div>
                  </div>
                  <h4 className="font-weight-bold">30</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card py-3 px-3" style={{ borderRadius: "10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="pr-1">
                      <img src={users} />
                    </div>
                    <div>Deleted Users </div>
                  </div>
                  <h4 className="font-weight-bold">30</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Tabs
              defaultTab="basic"
              onChange={(tabId) => {
                console.log(tabId);
              }}
            >
              <TabList>
                <Tab tabFor="basic">Basic Users</Tab>
                <Tab tabFor="personal">Personal</Tab>
                <Tab tabFor="business">Business</Tab>
                <Tab tabFor="agency">Agency</Tab>
              </TabList>
              <TabPanel tabId="basic">
                <div className="pt-4">
                  <UsersList />
                </div>
              </TabPanel>
              <TabPanel tabId="personal">
                <div className="pt-4">
                  <UsersList />
                </div>
              </TabPanel>
              <TabPanel tabId="business">
                <div className="pt-4">
                  <UsersList />
                </div>
              </TabPanel>
              <TabPanel tabId="agency">
                <div className="pt-4">
                  <UsersList />
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
