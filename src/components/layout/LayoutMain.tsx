import React from "react";
import { Manrope } from "next/font/google";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface ILayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <div className={manrope.className}>
      <Topbar></Topbar>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar></Sidebar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutMain;
