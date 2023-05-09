import { useState } from "react";
// components
import "./App.css";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Top from "./components/Top";
// end of components
// icons
import { IoMdAdd } from "react-icons/io";
import { RiMic2Line } from "react-icons/ri";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineGifBox } from "react-icons/md";
import Footer from "./components/Footer";
// end of icons

import Menu from "./components/Menu";

function App() {
  const [showmodal, setshowModal] = useState(false);
  const [showsidebar, setShowsidebar] = useState(false);

  const handlehide = () => {
    setShowsidebar(false);
  };

  const handlehshow = () => {
    setShowsidebar(true);
  };

  const handleOpen = () => {
    setshowModal(true);
  };
  const handelClose = () => {
    setshowModal(false);
  };

  return (
    <div className="App">
      <div className="container h-full flex-row flex-row-reverse">
        <Top handlehshow={handlehshow} />
        <Post
          name="minicode"
          idname="@minicode ."
          time="19h"
          comments="381"
          retwit="2,007"
          like="19.4k"
        />
        <Post
          name="minicode"
          idname="@minicode ."
          time="19h"
          comments="381"
          retwit="2,007"
          like="19.4k"
        />
        <Post
          name="minicode"
          idname="@minicode ."
          time="19h"
          comments="381"
          retwit="2,007"
          like="19.4k"
        />

        {/* modal */}
        {showmodal && (
          <Modal handelClose={handelClose}>
            <ul
              className=""
              style={{ listStyle: "none", marginBottom: "150px" }}
            >
              <li className="text-justify  p-3">
                <a className="text-decoration-none text-dark m-2">Spaces</a>
                <span className="bg-white rounded-circle p-2 ">
                  <i className="text-primary ">
                    <RiMic2Line />
                  </i>
                </span>
              </li>
              <li className="text-justify p-3">
                <a className="text-decoration-none text-dark m-2">Photos</a>
                <span type="file" className="bg-white rounded-circle p-2 ">
                  <i className="text-primary ">
                    <AiOutlinePicture />
                  </i>
                </span>
              </li>
              <li className="text-justify p-3">
                <a className="text-decoration-none text-dark m-2">Gif</a>
                <span className="bg-white rounded-circle p-2 ">
                  <i className="text-primary ">
                    <MdOutlineGifBox />
                  </i>
                </span>
              </li>
            </ul>
          </Modal>
        )}
        {/* end of modal */}

        {/* add post */}
        <div className="container-fluid fixed-bottom">
          <div
            id="add"
            class="container-fluid d-inline-flex  align-items-end flex-column bg-transparent "
          >
            <div
              onClick={handleOpen}
              className="mt-auto p-3 bg-primary rounded-circle p-3 "
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-add text-white " style={{ fontSize: "20px" }}>
                <IoMdAdd />
              </i>
            </div>
          </div>
          <Footer />
        </div>
        {/* end of add post */}

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
