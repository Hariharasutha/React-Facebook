import React from "react";
import { CameraFill, EmojiSmile, Images, PersonCircle } from "react-bootstrap-icons";

export default function CreatePost() {
  return (
    <div className="create-post background-white br-10 my-4">
      <div className="d-flex align-items-center mx-3">
        <PersonCircle className="fs-1 pe-2" />
        <input
          type="search"
          placeholder="What's on your mind?"
          className="search-box"
          style={{ flex: 1 }}
        />
        <input 
          type="search" 
          placeholder="Img Url" 
          className="search-box" 
        />
        <button className="btn btn-success br-20 ms-3">
            POST
        </button>
      </div>
      <div className="d-flex pt-5 pb-1 justify-content-evenly">
        <div className="d-flex post-icon align-items-center">
            <CameraFill color="red"/>Live video
        </div>
        <div className="d-flex post-icon align-items-center">
            <Images color="green"/>Photo/video
        </div>
        <div className="d-flex post-icon align-items-center">
            <EmojiSmile className="text-warning"/>Feeling Activity
        </div>
      </div>
    </div>
  );
}
