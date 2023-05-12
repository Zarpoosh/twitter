import { useState } from "react";
// components
import "./App.css";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Top from "./components/Top";
import Footer from "./components/Footer";
// end of components
// icons
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiMic2Line } from "react-icons/ri";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineGifBox } from "react-icons/md";
import { GiFeather } from "react-icons/gi";
// end of icons

import Menu from "./components/Menu";
import Retweet from "./components/Retweet";

function App() {
  const [showmodal, setshowModal] = useState(false);
  const [showsidebar, setShowsidebar] = useState(false);
  const [showtext, setShowText] = useState(false);

  const handlehide = () => {
    setShowsidebar(false);
  };

  const handlehshow = () => {
    setShowsidebar(true);
  };

  const handleOpen = () => {
    setshowModal(true);
    setShowText(true);
  };
  const handelClose = () => {
    setshowModal(false);
    setShowText(false);
  };

  return (
    <div className="App">
      <div className="container h-full flex-row flex-row-reverse">
        <Top handlehshow={handlehshow} />
        <Post name="minicode" idname="@minicode ." time="19h" comments="38" />
        <Post name="minicode" idname="@minicode ." time="19h" comments="38" />
        {/* add post */}
        <div className="container-fluid  mb-5">
          <div
            id="add"
            class="container-fluid d-flex align-items-end flex-column fixed-bottom "
          >
            <div>
              {showtext && (
                <a
                  className="text-decoration-none m-2 text-dark"
                  style={{ fontSize: "20px" }}
                >
                  Tweet
                </a>
              )}
              <i
                className="fa fa-add"
                style={{ fontSize: "50px", cursor: "pointer" }}
                onClick={handleOpen}
              >
                <BsFillPlusCircleFill
                  style={{
                    color: "#1D9BF0",
                    boxShadow: " 5px 5px 5px rgba(0, 0, 0, 0.379)",
                  }}
                  className="bg-white  rounded-circle"
                />
              </i>
            </div>
            <Footer />
          </div>
        </div>
        {/* end of add post */}

        {/* retweet */}
        {/* <Retweet/> */}
        {/* end of retweet */}

        {/* modal */}
        {showmodal && (
          <Modal handelClose={handelClose}>
            <ul
              id="modal-i"
              className="d-flex flex-column"
              style={{ listStyle: "none", marginBottom: "150px" }}
            >
              <li className=" py-3">
                <a className="text-decoration-none text-dark m-2">Spaces</a>
                <span className="bg-white rounded-circle p-2 ">
                  <i className="text-primary ">
                    <RiMic2Line />
                  </i>
                </span>
              </li>
              <li className="py-3">
                <a className="text-decoration-none text-dark m-2">Photos</a>
                <span type="file" className="bg-white rounded-circle p-2 ">
                  <i className="text-primary ">
                    <AiOutlinePicture />
                  </i>
                </span>
              </li>
              <li className="pt-3 ">
                <a className="text-decoration-none text-dark m-3">Gif</a>
                <span className="bg-white rounded-circle p-2 m-3 ">
                  <i className="text-primary ">
                    <MdOutlineGifBox />
                  </i>
                </span>
              </li>
              {/* <p className="">Tweet</p> */}
            </ul>
          </Modal>
        )}
        {/* end of modal */}

        {/* slidber */}
        {showsidebar && (
          <Sidebar handlehide={handlehide}>
            <Menu
              name="minicode"
              idname="@minicode"
              following="3"
              followers="2.5k"
            />
          </Sidebar>
        )}

        {/* end of sidebar */}
      </div>
    </div>
  );
}

export default App;
