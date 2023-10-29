import React from "react";
import { ChatLeftDots, CollectionPlay, Flag, HouseDoor, PlusSquare, ShopWindow } from "react-bootstrap-icons";

export default function Menuu() {

  return (
    <div className="content-left mb-20 ">
      <div className="d-flex align-items-center ms-2 ">
        <img src="https://img.freepik.com/premium-vector/h-logo-design-template-creative-h-icon-initials-based-letters-vector_487414-2807.jpg?size=626&ext=jpg&uid=R114558677&ga=GA1.1.302970376.1693332036&semt=ais " width={32} height={32} alt="" className="br-20"/>
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
