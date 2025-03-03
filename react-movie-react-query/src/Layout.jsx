import React from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";

const Layout = function () {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
