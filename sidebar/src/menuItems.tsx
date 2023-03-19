import {HiOutlineLightBulb} from "react-icons/hi";

export const MenuItems = [
  {title: "Dashboard"},
  {title: "Pages", icon: <HiOutlineLightBulb/>
},
  {title: "Dashboard", spacing: true},
  {title: "Projects",
  submenu: true,
  submenuItems: [
    {title: "submenu 1"},
    {title: "submenu 1"},
    {title: "submenu 1"},
  ],
},
{title: "Analyticts"},
{title: "Analyticts"},
{title: "Analyticts", spacing:true},
{title: "Analyticts"},
{title: "Analyticts"},
]