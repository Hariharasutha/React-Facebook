import React from "react";
import {
    Bell,
    ChatLeftDots,
  CollectionPlay,
  Flag,
  HouseDoor,
  People,
  PersonCircle,
  Plus,
  Power,
  Search,
  ShopWindow,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="p-3 d-flex background-white justify-content-between">
      <div className="d-flex align-items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook-logo"
          width={30}
          height={35}
        />

        <div className="search-container d-flex align-items-center mx-3 p-1 br-20">
          <Search className="ms-1 me-1" />
          <input
            type="search"
            placeholder="Search Facebook"
            className="search-box mx-1"
          />
        </div>
        <div className="d-flex menu fs-3 cursor-pointer ">
          <div className="">
          <NavLink to="/" className="title">
              <HouseDoor />
             </NavLink>
          </div>
          <div className="svg">
          <NavLink to="/group" className="title">
            <Flag />
            </NavLink>
          </div>
          <div>
          <NavLink to="/vide" className="title">
            <CollectionPlay />
            </NavLink>
          </div>
          <div>
          <NavLink to="/cart" className="title">
            <ShopWindow />
            </NavLink>
          </div>
          <div>
          <NavLink to="/users" className="title">
            <People />
          </NavLink>
          </div>
          
        </div>
      </div>
      <div className="d-flex profile align-items-center cursor-pointer" >
      <div>
          <PersonCircle />
        </div>
        <b className="username ps-3">{'Hariharasuthan'}</b>
        <div>
            <Plus />
        </div>
        <div>
            <ChatLeftDots />
        </div>
        <div>
            <Bell />
        </div>
        <div>
            <button type="button" className="btu background-white" title="logout">
                <Power className="cursor-pointer" />
            </button>
        </div>
        </div>
    </div>
  );
}

export default Header;
