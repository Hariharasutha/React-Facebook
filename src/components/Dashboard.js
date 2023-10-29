import React from "react";
import Header from "./Header";
import Content from "./Content";
import { Route, Routes } from "react-router-dom";
import Group from "./pages/Group";
import Users from "./pages/Users";
import Video from "./pages/Video";
import Cartss from "./pages/Cartss";

function Dashboard() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cartss />} />
        <Route path="/group" element={<Group />} />
        <Route path="/users" element={<Users />} />
        <Route path="/vide" element={<Video />} />
      </Routes>
      
      <Content />
    </div>
  );
}

export default Dashboard;
