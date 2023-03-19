"use client";

import { MenuItems } from "menuItems";
import { Inter } from "next/font/google";
import { useState } from "react";
import { HiOutlineArrowCircleRight, HiOutlineHome, HiOutlineSearch, HiOutlineViewGrid , HiOutlineChevronDown} from "react-icons/hi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);
    const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
  return (
    <div className="flex">
      <div
        className={`relative h-screen  bg-purple-200 p-5 pt-8 duration-300 ${
          sideBarOpen ? "w-72" : "w-20"
        }`}
      >
        <HiOutlineArrowCircleRight onClick={()=> setSideBarOpen(!sideBarOpen)} className={`absolute -right-3 top-9 cursor-pointer rounded-full border border-slate-300 bg-white text-3xl ${!sideBarOpen && "rotate-180"}`}/>
        <div className="inline-flex space-x-2">
        <HiOutlineHome className="text-3xl text-white bg-black rounded cursor-pointer block float-left"/>
        <h1 className={`text-white origin-left font-medium text-2xl ${!sideBarOpen && "scale-0"}`}>SideBar</h1>
        </div>
        <div className={`flex items-center rounded-md bg-white mt-6 py-2 ${!sideBarOpen ? "px-2" : "px-4"}`}> <HiOutlineSearch className={`text-lg block float-left cursor-pointer mr-2 ${sideBarOpen && "mr-2"}`}/>
        <input type={'search'} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!sideBarOpen && "hidden"}`}/>
        </div>
        <ul>
          {MenuItems.map((menu, index)=>(
            <>
            <li key={index} className={`text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-50 ${menu.spacing ? "mt-9" : "mt-2"} rounded-md`}>
              <span className="text-2xl block float-left  text-white bg-black rounded cursor-pointer">{menu.icon ?  menu.icon : <HiOutlineViewGrid/>}</span>
              <span className={`text-base font-medium flex-1 duration-200 ${!sideBarOpen && "hidden"}`}>{menu.title}</span>
              {menu.submenu && sideBarOpen &&  (
               <HiOutlineChevronDown onClick={()=> setSubMenuOpen(!subMenuOpen)} className={`${subMenuOpen && "rotate-180"}`}/>
              )}
            </li>
            {menu.submenu && subMenuOpen && sideBarOpen && (
              <ul>
                {menu.submenuItems.map((submenuItem, index)=>(
                  <li key={index} className="text-purple-700 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-50 rounded-md">{submenuItem.title}</li>
                ))}
              </ul>
            )}
            </>
          ))}
          
          
        </ul>
      </div>
     
      <div className="p-7">
        <h1 className="text-2xl font-semibold"> Home Page</h1>
      </div>
    </div>
  );
}
