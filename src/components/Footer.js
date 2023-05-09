import React from "react";
// icons
import { RiHome7Fill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { RiMic2Line } from "react-icons/ri";
import { HiOutlineBell } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";
// end of icons

const Footer = () => {
  return (
    <footer className="container-fluid bg-white  mt-4 border-top p-2 ">
      <ul className="list-inline  text-center justify-content-between">
        <li className="list-inline-item mx-3">
          <a className="text-decoration-none " href="">
            <i className="fa fa-home text-dark ">
              <RiHome7Fill />
            </i>
          </a>
        </li>
        <li className="list-inline-item mx-3">
          <a className="text-decoration-none " href="">
            <i className="fa fa-home text-dark ">
              <BsSearch />
            </i>
          </a>
        </li>
        <li className="list-inline-item mx-3">
          <a className="text-decoration-none " href="">
            <i className="fa fa-home text-dark ">
              <RiMic2Line />
            </i>
          </a>
        </li>
        <li className="list-inline-item mx-3">
          {"  "}
          <a className="text-decoration-none " href="">
            <i className="fa fa-home text-dark ">
              <HiOutlineBell />
            </i>
          </a>
        </li>
        <li className="list-inline-item mx-3">
          <a className="text-decoration-none " href="">
            <i className="fa fa-home text-dark ">
              <FaRegEnvelope />
            </i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
