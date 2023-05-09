import React from "react";
import logo from "../image/minicode - Copy.jpg";
import picture from "../image/project.png";
// icons
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { useState } from "react";
// end of icons

import "./Post.css";

const Post = (prop) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container-fluid border-bottom my-5">
      <div className=" m-1 mt-4 row  ">
        {/* logo */}
        <div className="col-md-2 col-4">
          <a className="row">
            <img src={logo} alt="" />
          </a>
        </div>
        {/* end of logo */}

        {/* descreption */}
        <div className="col-8 align-items-left text-justify ">
          <div className="row"></div>
          <a
            href="#"
            id="chanel-name"
            className="text-decoration-none text-dark"
          >
            {" "}
            {prop.name}{" "}
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            {prop.idname}
          </a>
          <span className="text-secondary">{prop.time}</span>
          <div className="row ">
            <p className="text-justify mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              temporibus accusantium. Ullam perferendis in necessitatibus quo,
              sint ratione saepe! Praesentium perspiciatis nesciunt harum
              dolorum error accusamus eos laboriosam, veritatis tempora.
            </p>
          </div>
          {/* image */}
          <a id="picture" className="row">
            <img className="rounded-4" src={picture} alt="" />
          </a>
          {/* end of image */}

          {/* icons */}
          <div className="row text-center">
            <ul id="post" className="list-inline">
              <li className="mx-2 list-inline-item ">
                <span className=" mt-1 d-inline-block">
                  <i className="fa fa- text-secondary">
                    <FaRegComment />
                  </i>
                </span>
                <p className="d-inline-block">{prop.comments}</p>
              </li>

              <li className="mx-2 list-inline-item ">
                <span
                  onClick={() => setCounter(counter + 1)}
                  className="mt-1 d-inline-block"
                >
                  <i className="text-secondary ">
                    <AiOutlineRetweet />
                  </i>
                </span>
                <p className="d-inline-block">{prop.retwit}</p>
              </li>

              <li className="mx-2 list-inline-item ">
                <span
                  onClick={() => setCounter(counter + 1)}
                  className=" mt-1 d-inline-block"
                >
                  <i className="text-secondary ">
                    <AiOutlineHeart />
                  </i>
                </span>
                <p className="d-inline-block">{counter}</p>
              </li>

              <li className="mx-2 list-inline-item ">
                <span className=" mt-1 d-inline-block">
                  <i className="text-secondary ">
                    <BsShare />
                  </i>
                </span>
              </li>
            </ul>
          </div>
          {/* end of icons */}
        </div>
        {/* end of descreption */}
      </div>
    </div>
  );
};

export default Post;