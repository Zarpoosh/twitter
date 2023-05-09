import React from "react";
import "./Sidebar.css";

const Sidebar = (prop) => {
  return (
    <div className="container-fluid side-bg">
      <div className="row ">
        {prop.children}
        <div
          onClick={prop.handlehide}
          id="bg-side"
          style={{ height: "100vh" }}
          className="col-4"
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
