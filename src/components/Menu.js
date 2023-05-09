import React, { useState } from "react";
import logo from "../image/minicode - Copy.jpg";
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
// end of icons

const Menu = (prop) => {
  return (
    <div className="col-8 col-md-4 bg-white pt-3 " style={{ height: "100vh" }}>
      <div className="row">
        <a className=" ">
          <img src={logo} style={{ width: "50px" }} alt="" />
        </a>
        <a href="#" id="chanel-name" className="text-decoration-none text-dark">
          {prop.name}
        </a>
        <a href="#" className="text-secondary text-decoration-none">
          {prop.idname}
        </a>
      </div>
      <div className="row my-3 border-bottom p-2">
        <a href="" className="mx-2 text-decoration-none text-secondary">
          {prop.following} Following
        </a>
        <a href="" className="mx-2 text-decoration-none text-secondary">
          {prop.followers} Followers
        </a>
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
          <li className="my-4 border-bottom border-top p-2">
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
          <li className="my-4 border-top p-2 ">
            <a href="" className="text-dark text-decoration-none">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <HiOutlineLightBulb />
                </i>
              </span>
            </a>
            <a href="" className="text-dark text-decoration-none">
              <span type="file" className="bg-white rounded-circle p-2 ">
                <i>
                  <BsQrCode />
                </i>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* end of icons */}
    </div>
  );
};

export default Menu;
