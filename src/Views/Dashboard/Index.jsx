/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Index.css";
import Girl from "../../Assets/fine-girl.jpeg";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
const Dashboard = () => {
  return (
    <div>
      <DashboardContainer title="">
        <div className="black-border">
          <div className="text-center font-weight-bold">
            <marquee>❤️Get A Match!, Find a Love Part❤️</marquee>
          </div>
        </div>
        <div className="">
          <div className="suggest-border">
            <img src={Girl} className="w-100 h-100 " />
          </div>
          <div className="px-3 pt-4">
            <h4 className="text-white font-weight-bold pt-2">
              Abike Mercy, 23
            </h4>
            <div className="pt-2">
              <i class="fa fa-map-marker text-white"></i> 4 miles away
            </div>
            <div className="d-flex justify-content-center"></div>
            <div className="pt-4 d-flex justify-content-between">
              <div className="dot-circ">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <i class="fa fa-times text-icon-red fa-2x"></i>
                  </div>
                </div>
              </div>
              <div className="dot-circ">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <i class="fa fa-heart text-icon-red fa-2x"></i>
                  </div>
                </div>
              </div>
              <div className="dot-circ">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <i class="fa fa-star text-icon-red fa-2x"></i>
                  </div>
                </div>
              </div>
              <div className="dot-circ">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <i class="fa fa-refresh text-icon-red fa-2x"></i>
                  </div>
                </div>
              </div>
              <div className="dot-circ">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div>
                    <i class="fa fa-cog text-icon-red fa-2x"></i>
                  </div>
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
