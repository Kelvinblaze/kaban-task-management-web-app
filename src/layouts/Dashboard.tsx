import React from "react";
import Navbar from "../components/layout/Navbar";
import SideBar from "../components/layout/SideBar";

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className="lg:flex lg:h-screen">
      <SideBar />

      <div className="bg-light-grey dark:bg-very-dark-grey min-h-screen w-full">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
