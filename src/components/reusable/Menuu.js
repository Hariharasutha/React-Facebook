import React from "react";
import img from "../images/user-logo3.png";
import { ChatLeftDots, CollectionPlay, Flag, HouseDoor, PlusSquare, ShopWindow } from "react-bootstrap-icons";

export default function Menuu() {
  return (
    <div className="content-left mb-20 ">
      <div className="d-flex align-items-center ms-2 ">
        <img src={img} width={32} height={32} alt="" className="br-10"/>
        <b className="ms-2">{"Hariharasuthan"}</b>
      </div>
        <div className="d-flex cursor-pointer">
            <PlusSquare />
         <b>{"COVID-19 Information center"}</b>
        </div>
        <div className="d-flex cursor-pointer">
            <HouseDoor />
         <b>{"pages"}</b>
        </div>
        <div className="d-flex cursor-pointer">
            <Flag />   
         <b>{"Friends"}</b>
        </div>
        <div className="d-flex cursor-pointer">
            <ChatLeftDots /> 
         <b>{"Messenger"}</b>
        </div>
        <div className="d-flex cursor-pointer">
           <ShopWindow />
         <b>{"MarketPlace"}</b>
        </div>
        <div className="d-flex cursor-pointer">
          <CollectionPlay />
         <b>{"Videos"}</b>
        </div>
    </div>
  );
}
