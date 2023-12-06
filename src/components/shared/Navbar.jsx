import { Link } from "react-router-dom";
import icon from "../../assets/goodmorning.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  let nav = useNavigate()
  const navLinks = [
    {
      id: "/dashboard/home",
      title: "Dashboard",
    },
 
    {
      id: "/dashboard/add-product",
      title: "Add Product",
    },
    
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full bg-red-100 py-5">
      <div className="max-w-7xl mx-auto p-2 bg-white flex justify-between items-center">
        <div>
          <img src={icon} alt="" className="w-24" />
        </div>
        <ul className="list-none hidden lg:flex justify-end items-center w-full">
          {navLinks.map((nav, i) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[14px] text-black ${
                i === navLinks.length - 1 ? "mr-0" : "mr-10"
              } mr-10`}
            >
              <Link to={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? icon : icon}
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
      <b className="cursor-pointer" onClick={()=>{localStorage.removeItem("login");nav("/")}}>logout</b>
    </div>

    // <div className="w-full">
    //   <nav className="max-w-7xl mx-auto flex py-6 justify-between items-center navbar absolute bg-black">
    //     <img src={icon} alt="hoobank" className="w-[124px] h-[20px]" />
    //     <ul className="list-none hidden lg:flex justify-end items-center w-full">
    //       {navLinks.map((nav, i) => (
    //         <li
    //           key={nav.id}
    //           className={`font-poppins font-normal cursor-pointer text-[14px] text-black ${
    //             i === navLinks.length - 1 ? "mr-0" : "mr-10"
    //           } text-white mr-10`}
    //         >
    //           <Link to={`${nav.id}`}>{nav.title}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //     <div className="lg:hidden flex flex-1 justify-end items-center">
    //       <img
    //         src={toggle ? icon : icon}
    //         alt="menu"
    //         className="w-[28px] h-[28px] object-contain"
    //         onClick={() => setToggle((previous) => !previous)}
    //       />
    //       <div
    //         className={`${
    //           toggle ? "flex" : "hidden"
    //         } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
    //       >
    //         <ul className="list-none flex flex-col justify-end items-center flex-1">
    //           {navLinks.map((nav, i) => (
    //             <li
    //               key={nav.id}
    //               className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${
    //                 i === navLinks.length - 1 ? "mr-0" : "mb-4"
    //               } text-white mr-10`}
    //             >
    //               <Link to={`${nav.id}`}>{nav.title}</Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
