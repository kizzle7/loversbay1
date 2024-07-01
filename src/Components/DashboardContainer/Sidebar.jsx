/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Dropdown } from "antd";
import menu from "../../constants/sidebars";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const getActive = (id) => {
    setActive(id);
  };

  const items = [
    {
      key: "1",
      label: (
        <div
          className="text-danger"
          onClick={() => {
            sessionStorage.setItem("token", "");
            window.location.href = "/";
          }}
        >
          Log Out{" "}
        </div>
      ),
    },
  ];

  const locationPath = useLocation();
  const currentLocation = locationPath.pathname.replace("/", "");

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <aside className="sidebar" >
      <ul class="list-unstyled container">
        {menu.map((men) => {
          return (
            <li style={{ whiteSpace: "nowrap" }}>
              <div
                className={`${
                  currentLocation === men.path ? "active-li" : "inactive-li"
                }`}
              >
                <Link
                  to={"/" + men.path}
                  className="pl-1"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                  }}
                >
                  <img src={men?.icon} style={{ paddingRight: "1rem" }} width={35} />
                  {men.name}{" "}
                </Link>{" "}
              </div>
            </li>
          );
        })}{" "}
      </ul>{" "}
    </aside>
  );
};

export default SideBar;
