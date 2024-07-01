import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DocmentText from "../../../Assets/document-text.svg";
import { Drawer } from "antd";
import "../index.css";
import { Button } from "../../Button/Index";
import IconUsd from "../../../Assets/--.svg";
export default function BasicDemo() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [products, setProducts] = useState([
    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      status: "Successful",
      paymentMethod: "STRIPE",
      fee: "$23",
    },
    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },
    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },
    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },    {
      code: "1525FGGF",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      paymentMethod: "STRIPE",
      fee: "$23",
      status: "Successful",
    },
  ]);

  const Action = () => {
    return (
      <div className="table-btn-details text-center" onClick={showDrawer}>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <div className="d-flex align-items-center">
              <div className="pr-2">
                <img src={DocmentText} />
              </div>
              <div>Details</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="">
      <DataTable
        value={products}
        tableStyle={{ minWidth: "50rem" }}
        className="table-sizee"
      >
        <Column field="code" header="Date"></Column>
        <Column field="name" header="Full Name"></Column>
        <Column field="category" header="Email Address"></Column>
        <Column field="paymentMethod" header="Amount Paid"></Column>
        <Column field="fee" header="Plan"></Column>
        <Column field="amount" header="Status"></Column>
        <Column field="amount" header="Status"></Column>
        <Column field="amount" header="Status"></Column>

        <Column field="Action" header="Action" body={Action}></Column>
      </DataTable>

      <Drawer title="" onClose={onClose} open={open}>
        <div>
          <div className="">
            <div>
              <img src={IconUsd} />
            </div>
            <div className="font-weight-bold pt-2 cabinet-font-txt">
              Payment details
            </div>
          </div>
          <div className="pt-4">
            <div className="amt-border">
              <div className="cabinet-font-txt">Total Amount</div>
              <h3
                className="pt-2 font-weight-bold cabinet-font-txt"
                style={{ fontWeight: "800" }}
              >
                $1200.00
              </h3>
              <div className="pt-3">
                <div className="amt-load-status cabinet-font-txt">
                  Pending Confirmation
                </div>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <div className="d-flex justify-content-between align-items-center pb-3 cabinet-font-txt">
              <div className="cabinet-font-txt">Date</div>
              <div>10 sept 2024</div>
            </div>
            <div className="d-flex justify-content-between align-items-center pb-3 cabinet-font-txt">
              <div>Payment by</div>
              <div>Joe brenda</div>
            </div>
            <div className="d-flex justify-content-between align-items-center pb-3 cabinet-font-txt">
              <div>Purpose</div>
              <div>Team subscription</div>
            </div>
            <div className="d-flex justify-content-between align-items-center pb-3 cabinet-font-txt">
              <div>Payment method</div>
              <div>Card</div>
            </div>
            <div className="d-flex justify-content-between align-items-center pb-3 cabinet-font-txt">
              <div>Email</div>
              <div>joe.brenda@presenta.com</div>
            </div>
            <div className="d-flex justify-content-between align-items-center pb-3 cabinet-font-txt">
              <div>Reference</div>
              <div>PRE89900223XX</div>
            </div>
            <br />
            <Button className="dark-bg" text="Download"></Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
