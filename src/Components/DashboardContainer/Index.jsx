/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import SideBar from "./Sidebar";
import User from "../../Assets/png/user.jpeg";
import { Dropdown } from "antd";
import "./index.css";
import { useHistory } from "react-router-dom";
export const DashboardContainer = ({ children, title }) => {
  const history = useHistory();
  const items = [
    {
      key: "1",
      label: <div className="text-danger">Log Out</div>,
    },
  ];
  return (
    <div className="">
      <div class="page-container">
        <div className="show-web-interface">
          <SideBar />
        </div>
        <div class="page-content">
          <div class="main-wrapper">
            <div className="top-navv">
              <div className="d-flex justify-content-between align-items-center">
                <div className="py-2">🤍Lovers Bay</div>
              </div>
            </div>

            <div className="bg-grey">{children} </div>
          </div>{" "}
        </div>{" "}
        <div className="show-mobile-interface">
          <footer>
            <div className="py-2 px-3">
              <div className="d-flex justify-content-between">
                <div>
                  <i class="fa fa-heart text-tint "></i>
                </div>
                <div>
                  <i class="fa fa-heart text-white "></i>
                </div>
                <div>
                  <i class="fa fa-crosshairs text-white "></i>
                </div>
                <div>
                  <i class="fa fa-comment text-white "></i>
                </div>

                <div>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        history?.push("/");
                      }}
                    >
                      <i class="fa fa-user-circle-o text-white "></i>
                    </a>
                  </Dropdown>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
