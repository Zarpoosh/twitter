import React, { useState } from "react";
import logo from "../image/minicode - Copy.jpg";
import "./Menu.css";
// icons
import { MdPersonOutline } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TbRocket } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsQrCode } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
// end of icons

const Menu = (prop) => {
  return (
    <div id="menu" className="col-10 col-md-5 col-lg-3  bg-white pt-3  " style={{ height: "100vh" }}>
      <div className="row">
        {/* logo */}
        <a className=" ">
          <img src={logo} style={{ width: "60px" }} alt="" />
        </a>
        {/* end of logo */}
        <div className="col-9">
          <div className="row">
            <a
              href="#"
              id="chanel-name"
              className="text-decoration-none text-dark"
            >
              {prop.name}
            </a>
            <a href="#" className="text-secondary text-decoration-none d-inline-block">
              {prop.idname}
            </a>
          </div>
        </div>
        <div className="col-3 justify-content-center text-center">
          <span type="file" className="bg-white rounded-circle p-2 ">
            <i>
              <AiOutlineDown />
            </i>
          </span>
        </div>
      </div>
      <div className="flex-row my-3 border-bottom p-2">
        <a
          href="#"
          id="follow"
          className="mx-2 text-decoration-none text-dark "
        >
          {prop.following}
        </a>
        <span className=" text-secondary">Following</span>

        <a href="#" id="follow" className="mx-2 text-decoration-none text-dark">
          {prop.followers}
        </a>
        <span className=" text-secondary">Followers</span>
      </div>

      {/* icons */}
      <div className="row">
        <ul id="side">
          <li>
            <a href="" className="text-dark text-decoration-none">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <MdPersonOutline />
                </i>
              </span>
              Profile
            </a>
          </li>
          <li className="my-4">
            <a href="" className="text-dark text-decoration-none">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <CiViewList />
                </i>
              </span>
              Lists
            </a>
          </li>
          <li className="my-4">
            <a href="" className="text-dark text-decoration-none">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <FaRegCommentDots />
                </i>
              </span>
              Topics
            </a>
          </li>
          <li className="my-4">
            <a href="" className="text-dark text-decoration-none">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <BsBookmark />
                </i>
              </span>
              Bookmarks
            </a>
          </li>
          <li className="my-4">
            <a href="" className="text-dark text-decoration-none">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <BsPersonPlus />
                </i>
              </span>
              Twitter Circle
            </a>
          </li>
          <li className="my-4">
            <a href="" className="text-dark text-decoration-none">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <AiOutlineThunderbolt />
                </i>
              </span>
              Moments
            </a>
          </li>
          <li className="my-4">
            <a href="" className="text-dark text-decoration-none">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <FaRegMoneyBillAlt />
                </i>
              </span>
              Monetisation
            </a>
          </li>
          <li className="my-4 border-bottom border-top p-2 flex-nowrap">
            <a href="" className="text-dark text-decoration-none ">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <TbRocket />
                </i>
              </span>
              Twitter for Professianals
            </a>
          </li>
          <li className="my-4">
            <a href="" className="text-dark text-decoration-none m-3">
              Setting and Privacy
            </a>
          </li>
          <li className="my-4">
            <a href="" className="text-dark text-decoration-none m-3">
              Help Center
            </a>
          </li>
          <li className=" border-top p-2 ">
            <div className="row ">
              <div className="col-9">
                <a href="" className="text-dark text-decoration-none">
                  <span type="file" className="bg-white rounded-circle pl-2">
                    <i>
                      <HiOutlineLightBulb />
                    </i>
                  </span>
                </a>
              </div>
              <div className="col-3">
                <a href="" className="text-dark text-decoration-none">
                  <span type="file" className="bg-white rounded-circle m-4">
                    <i>
                      <BsQrCode />
                    </i>
                  </span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* end of icons */}
    </div>
  );
};

export default Menu;
