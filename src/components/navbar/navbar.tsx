import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { styles } from "../../styles";
import { logo, menu, close } from "../../assets";

const Navbar = ({handleScroll}:{handleScroll:Function}) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  
  const renderLinks=()=>{
    return(
      navLinks?.map((link) => (
        <ul
          key={link?.id}
          className={`${
            active == link?.title ? "text-white" : "text-gray-400"
          } hover:text-white`}
          onClick={() =>{ 
            setActive(link?.title)
            setToggle(false);
            handleScroll(link?.title);
          }}
        >
          <Link to={link?.id}>{link?.title}</Link>
        </ul>
      ))
    )
  }

  return (
    <nav className="flex flex-col gap-2">
      <div
        className={`px-2 w-full flex items-center max-w-7xl mx-auto py-2 justify-between`}
      >
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="object-contain h-16 w-16" />
          <p className="text-white font-bold text-sm md:text-md">
            Zain Gulbaz <p className="font-light">| Software Engineer</p>
          </p>
        </Link>
        <div className={`hidden sm:flex gap-4 font-semibold`}>
         {renderLinks()}
        </div>

        <div className="sm:hidden flex flex-col">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {toggle && <div className="black-gradient p-1 transition-all cursor-pointer">
        {renderLinks()}
        </div>}
    </nav>
  );
};

export default Navbar;
