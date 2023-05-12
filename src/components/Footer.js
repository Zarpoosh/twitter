import React from "react";
import "./Faooter.css"
// icons
import { RiHome7Fill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { RiMic2Line } from "react-icons/ri";
import { HiOutlineBell } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";
// end of icons

const Footer = () => {
  return (
    <footer className="container-fluid bg-white   mt-4 border-top">
      <div className="row justify-content-center align-items-center p-2 text-center">
        <div className="col-md-5">
          <div id="footer-i" className="row  flex-nowrap">
            <div className="col">
              <a  className="text-decoration-none " href="">
                <i className="fa fa-home text-dark ">
                  <RiHome7Fill />
                </i>
              </a>
            </div>
            <div className="col">
              <a className="text-decoration-none " href="">
                <i className="fa fa-home text-dark ">
                  <BsSearch />
                </i>
              </a>
            </div>
            <div className="col">
              <a className="text-decoration-none " href="">
                <i className="fa fa-home text-dark ">
                  <RiMic2Line />
                </i>
              </a>
            </div>
            <div className="col">
              <a className="text-decoration-none " href="">
                <i className="fa fa-home text-dark ">
                  <HiOutlineBell />
                </i>
              </a>
            </div>
            <div className="col">
              <a className="text-decoration-none " href="">
                <i className="fa fa-home text-dark ">
                  <FaRegEnvelope />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
