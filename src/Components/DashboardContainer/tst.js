/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import SideBar from "./Sidebar";
import User from "../../Assets/png/user.jpeg";
import { Dropdown } from "antd";
import "./index.css";
export const DashboardContainer = ({ children, title }) => {
  const items = [
    {
      key: "1",
      label: <div className="text-danger">Log Out</div>,
    },
  ];
  return (
    <div className="">
      <div class="page-container">
        <div class="page-content">
          <div class="main-wrapper">
            <div class="row">
              <div class="col-12">
                <div className="top-navv">
                  <h3 className="pt-2">tinder clone</h3>
                </div>
              </div>
            </div>
            <div className="pl-2">{children} </div>
          </div>{" "}
        </div>{" "}
      </div>
      <footer>
        <div className="py-2">Below Nav</div>
      </footer>
    </div>
  );
};
