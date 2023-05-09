import React from "react";

import "./Modal.css";
const Modal = (props) => {
  return (
    <div
      onClick={props.handelClose}
      className="container-fluid modal-bg d-inline-flex  align-items-end flex-column  "
    >
      <div className="content mt-auto">{props.children}</div>
    </div>
  );
};

export default Modal;
