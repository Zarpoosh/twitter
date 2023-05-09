import React from "react";
import "./Top.css";
import logo from "../image/minicode - Copy.jpg";
// icons
import { BsTwitter } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
// end of icons

const Top = (prop) => {
  return (
    <div className="container-fluid border-bottom">
      <div className="m-2 d-flex justify-content-between  p-1">
        <a onClick={prop.handlehshow}>
          <img src={logo} style={{ width: "50px" }} alt="" />
        </a>
        <span id="icon">
          <i class="fa fa-Twitter text-primary ">
            <BsTwitter />
          </i>
        </span>

        <span id="icon">
          <i class="fa fa-Stars text-dark ">
            <BsStars />
          </i>
        </span>
      </div>
    </div>
  );
};

export default Top;
