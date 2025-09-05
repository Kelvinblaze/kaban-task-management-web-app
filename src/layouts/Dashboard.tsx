import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import SideBar from "../components/layout/SideBar";

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />

      <div className="bg-light-grey dark:bg-very-dark-grey min-h-screen w-full">
        <Navbar isSideBarOpen={isSideBarOpen} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
