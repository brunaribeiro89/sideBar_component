"use client";


import { MenuItems } from "menuItems";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineArrowCircleRight, HiOutlineHome, HiOutlineSearch, HiOutlineViewGrid , HiOutlineChevronDown, HiOutlineMenu} from "react-icons/hi";

const inter = Inter({ subsets: ["latin"] });

export default function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
 
  return (
    <div className="flex ">
      <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className={`flex justify-between items-center h-full w-full px-4 2xl:px-16 bg-yellow-100 `}>
          <div></div>
            <div className="hidden p-2 sm:flex">
              <ul className="hidden sm:flex">
                <Link href={"/home"}>
                <li className="ml-10 uppercase hover:border-b text-md">Home</li>
                </Link>
                <Link href={"/sobre"}>
                <li className="ml-10 uppercase hover:border-b text-md">Sobre</li>
                </Link>
                <Link href={"/contatos"}>
                <li className="ml-10 uppercase hover:border-b text-md">Contatos</li>
                </Link>
              </ul>
            </div>
         <div className="sm:hidden cursor-pointer pl-24" onClick={() => setSideBarOpen(!sideBarOpen)}>
          <HiOutlineMenu size={25}/>
         </div>
     
        </div>
      </nav>
      <div
        className={`fixed left-0 top-0 h-full bg-purple-300 p-5 pt-8  ease-in ${
          sideBarOpen ? "w-72" : "w-20 "
        }`}
      >
        <HiOutlineArrowCircleRight onClick={()=> setSideBarOpen(!sideBarOpen)} className={`absolute -right-3 top-9 cursor-pointer rounded-full border border-slate-300 bg-white text-3xl ${!sideBarOpen && "rotate-180"}`}/>
        <div className="inline-flex space-x-2">
     
        <h1 className={`text-white origin-left font-medium text-2xl ${!sideBarOpen && "scale-0"}`}>SideBar</h1>
        </div>
        <div className={`flex items-center rounded-md bg-white mt-6 py-2 ${!sideBarOpen ? "px-2" : "px-4"}`}> <HiOutlineSearch className={`text-lg block float-left cursor-pointer mr-2 ${sideBarOpen && "mr-2"}`}/>
        <input type={'search'} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!sideBarOpen && "hidden"}`}/>
        </div>
        <ul className="w-full items-center justify-end">
          {MenuItems.map((menu, index)=>(
            <>
            <li key={index} className={`text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-50 ${menu.spacing ? "mt-9" : "mt-2"} rounded-md`}>
              <span className="text-2xl block float-left  text-black bg-white rounded cursor-pointer ">{menu.icon ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d={menu.icon}/>
             
              </svg> : <HiOutlineViewGrid/>}</span>
              <span className={`text-base font-medium flex-1 duration-200 ease-in  ${!sideBarOpen && "hidden"}`}>{menu.title}</span>
              {menu.submenu && sideBarOpen &&  (
               <HiOutlineChevronDown onClick={()=> setSubMenuOpen(!subMenuOpen)} className={`${subMenuOpen && "rotate-180"}`}/>
              )}
            </li>
            {menu.submenu && subMenuOpen && sideBarOpen && (
              <ul>
                {menu.submenuItems.map((submenuItem, index)=>(
                  <li key={index} className="text-purple-700 text-md font-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-50 rounded-md">{submenuItem.title}</li>
                ))}
              </ul>
            )}
            </>
          ))}
          
          
        </ul>
      </div>
        <div className={`p-7 mt-24 ${
          sideBarOpen ? "ml-72" : "ml-20"
        }`}>
        <h1 className="text-2xl font-semibold"> Home Page</h1>
      </div>
    </div>
  );
}
