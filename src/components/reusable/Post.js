import React from "react";
import {
  ChatLeftFill,
  HandThumbsUpFill,
  ShareFill,
} from "react-bootstrap-icons";

export default function Post(props) {
  return (
    <div className="create-post background-white br-10 mb-4 px-4">
      <div className="d-flex">
        <img src={props.profilepic} width={32} height={32} alt="" className=" me-2 br-10" />
        <div>
          <div className="ps-2">{props.username}</div>
          <div className="ps-2">{new Date(props.timestamp?.toDate()).toLocaleString()}</div>
        </div>
      </div>
      <p className="ps-3 pt-4">{props.message}</p>
      {props.image && (
        <img
          src={props.image}
          alt="profile"
          width={"100%"}
          height={600}
          className="px-2 py-3 br20"
        />
      )}
      <div className="d-flex color-gray justify-content-evenly cursor-pointer">
        <div className="d-flex align-items-center">
          <HandThumbsUpFill className="me-2" />
          Like
        </div>
        <div className="d-flex align-items-center">
          <ChatLeftFill className="me-2" />
          Comment
        </div>
        <div className="d-flex align-items-center">
          <ShareFill className="me-2" />
          Share
        </div>
      </div>
                
    </div>
  );
}
