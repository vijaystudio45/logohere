import React from "react";
import Header from "./AdminHeader";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
const Layout = (props) => {
  return (
    <div className="Layout ">
      <div className="Header">
        <Header />
      </div>
      <div className="DashBoard">
        <div className="Sidebar bg-texture">
          <Sidebar />
        </div>{" "}
        <div className="Outlet ">
          <div className="rightbar">
            <Outlet />
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div class=" text-white  flex overflow-hidden text-sm">
    //     <Sidebar />

    //     <div class="flex-grow overflow-hidden h-full flex flex-col">
    //       {/* header  */}
    //       <Header />

    //       <div class="ouletdatasection bg-gray-50">
    //         <Outlet />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Layout;
