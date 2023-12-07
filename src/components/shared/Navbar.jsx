import { Link, NavLink, useLocation } from "react-router-dom";
import icon from "../../assets/goodmorning.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import open from "../../assets/menu/open.png";
import close from "../../assets/menu/close.png";

const Navbar = () => {
  let nav = useNavigate();
  const navLinks = [
    {
      id: "/dashboard/home",
      title: "Dashboard",
    },
    {
      id: "/dashboard/add-product",
      title: "Add Products",
    },
    {
      id: "/dashboard/orders",
      title: "Orders",
    },
    {
      id: "/dashboard/confirm-orders",
      title: "Confirm Orders",
    },
    {
      id: "/dashboard/customer-info",
      title: "Customers Info",
    },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full py-5 shadow-lg shadow-slate-300">
      <div className="max-w-7xl mx-auto px-5 bg-white flex justify-between items-center">
        <div>
          <img src={icon} alt="" className="w-24" />
        </div>
        <ul className="list-none hidden lg:flex justify-end items-center w-full">
          {navLinks.map((nav, i) => (
            <NavLink
              key={nav.id}
              to={`${nav.id}`}
              className={`font-poppins font-normal cursor-pointer text-[14px] text-[#474747] ${
                i === navLinks.length - 1 ? "mr-0" : "mr-10"
              } mr-10`}
            >
              {nav.title}
            </NavLink>
          ))}
          <div>
            <IoLogOut
              className="cursor-pointer text-black text-[30px]"
              onClick={() => {
                localStorage.removeItem("login");
                nav("/");
              }}
            />
          </div>
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : open}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((previous) => !previous)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
                    i === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }mr-10`}
                >
                  <Link to={`${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
