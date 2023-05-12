import React from "react";
import logo from "../image/minicode - Copy.jpg";
import picture from "../image/project.png";
// icons
import { FaRegComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { useState } from "react";
// end of icons

import "./Post.css";

const Post = (prop) => {
  // btn like
  const [likeCount, setLikeCount] = useState(50);
  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }
  };
  // btn retweet
  const [retweet, setRetweet] = useState(20);
  const [activeretweet, setActiveRetweet] = useState("none");

  const handleRetweetClick = () => {
    if (activeretweet === "none") {
      setRetweet(retweet + 1);
      setActiveRetweet("retweet");
      return;
    }

    if (activeretweet === "retweet") {
      setRetweet(retweet - 1);
      setActiveRetweet("none");
      return;
    }
  };

  return (
    <div className="container-fluid border-bottom mt-3 mb-">
      <div className=" m-1  row  ">
        {/* logo */}
        <div className="col-md-2 col-3">
          <a className="row">
            <img src={logo} alt="" />
          </a>
        </div>
        {/* end of logo */}

        {/* descreption */}
        <div className="col-9 align-items-left text-justify ">
          <div className="row flex-nowrap">
            <div className="col-11">
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
            </div>
            <div className="col-1">
              <span className=" mt-1 d-inline-block">
                <i className="fa fa- text-secondary">
                  <BsThreeDotsVertical />
                </i>
              </span>
            </div>
          </div>

          <div className="row ">
            <p className=" mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              cupiditate magnam libero optio eveniet quae dicta quam dolorum,
              voluptas quisquam obcaecati modi unde. Labore atque repellat
              assumenda laboriosam? Dolorum, sequi!
            </p>
          </div>
          {/* image */}
          <a id="picture" className="row">
            <img className="rounded-4" src={picture} alt="" />
          </a>
          {/* end of image */}

          {/* icons */}
          <div id="post-i" className="row text-center flex-nowrap">
            <div className="col">
              <span className=" mt-1 d-inline">
                <i className="fa fa- text-secondary">
                  <FaRegComment />
                  {prop.comments}
                </i>
              </span>
            </div>
            <div className="col">
              <span className="mt-1 d-inline-block text-secondary">
                <i
                  className={`retweet ${
                    activeretweet === "retweet" ? "retweet-active" : ""
                  }`}
                  onClick={handleRetweetClick}
                >
                  <FaRetweet id="com-i" />
                  {retweet}
                </i>
              </span>
            </div>
            <div className="col">
              <span className="mt-1  d-inline-block text-secondary">
                <i
                  className={`like ${
                    activeBtn === "like" ? "like-active" : ""
                  }`}
                  onClick={handleLikeClick}
                >
                  <AiFillHeart style={{ margin: "0px" }} />
                  {likeCount}
                </i>
              </span>
            </div>
            <div className="col">
              <span className=" mt-1 d-inline">
                <i className="text-secondary ">
                  <BsShare />
                </i>
              </span>
            </div>
          </div>
          {/* end of icons */}
        </div>
        {/* end of descreption */}
      </div>
    </div>
  );
};

export default Post;
