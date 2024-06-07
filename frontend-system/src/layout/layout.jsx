import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <SideBar />
                <main className="flex-1 ml-56 mt-14">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
