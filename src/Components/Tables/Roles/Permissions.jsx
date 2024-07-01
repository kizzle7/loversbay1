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
      code: "Dashboard",
      name: "Victor Abimbola",
      category: "Food Order",
      amount: 3000,
      status: "Successful",
      
    },
    {
        code: "Presentation",
        name: "Victor Abimbola",
        category: "Food Order",
        amount: 3000,
        status: "Successful",
    },
    {
        code: "Storage",
        name: "Victor Abimbola",
        category: "Food Order",
        amount: 3000,
        status: "Successful",
    },
    {
        code: "Datas",
        name: "Victor Abimbola",
        category: "Food Order",
        amount: 3000,
        status: "Successful",
    },
    {
        code: "Report",
        name: "Victor Abimbola",
        category: "Food Order",
        amount: 3000,
        status: "Successful",
    },
   
  ]);

  const Action = () => {
    return (
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
       
      </div>
    );
  };
  return (
    <div className="">
      <DataTable
        value={products}
        className="table-sizee"
      >
        <Column field="code" header="Permissions"></Column>
        <Column field="create" header="Create" body={Action}>
          {" "}
        </Column>
        <Column field="view" header="View" body={Action}></Column>
        <Column field="update" header="Update" body={Action}></Column>
        <Column field="delete" header="Delete" body={Action}></Column>
      </DataTable>
    </div>
  );
}
