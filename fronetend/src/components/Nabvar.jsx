import { useSelector } from "react-redux";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import Userdropdown from "./Dropdown";
import { BiMenuAltRight } from "react-icons/bi";
import { AiTwotoneCloseCircle } from "react-icons/ai";

const Nabvar = ({ className }) => {
  const [isdrop, setisdrop] = useState(false);
  const isAuth = useSelector((state) => state.auth.status);
  console.log(isAuth);

  const navItem = [
    { id: 1, name: "HOME", active: true, link: "/" },
    { id: 2, name: "ABOUT", active: true, link: "/about" },
    { id: 3, name: "FEATURES", active: true, link: "/features" },
    { id: 5, name: "LOGIN", active: !isAuth, link: "/login" },
    {
      id: 6,
      name: <FaRegCircleUser />,
      active: isAuth,
      onclick: () => {
        setisdrop(!isdrop);
      },
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <div className={className}>
        <div className="flex items-center   justify-between sm:justify-center min-w-80 md:w-[80%] lg:w-3/5 py-4 px-4 text-white border-2 border-blue-50 rounded-full mx-auto ">
          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center space-x-2 sm:space-x-6">
            {navItem.map((item) =>
              item.active ? (
                <div
                  key={item.id}
                  className="flex items-center text-xs sm:text-sm md:text-lg lg:text-xl px-2 relative"
                >
                  <div onClick={item.onclick}>
                    <Link to={item.link}>{item.name}</Link>
                  </div>
                  {item.id === 6 && isdrop && (
                    <div className="absolute top-full mt-6 w-[150px] shadow-lg z-50 right-0">
                      <Userdropdown />
                    </div>
                  )}
                </div>
              ) : null
            )}
          </ul>

          {/* Menu Button (Mobile) */}
          <button
            className="sm:hidden flex justify-start z-50 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AiTwotoneCloseCircle size={20} /> : <BiMenuAltRight size={20} />}
          </button>

          {/* Mobile Menu */}
          <ul
            className={`fixed top-24 left-0 h-screen flex flex-col backdrop-blur-[4px] items-center justify-start py-4 space-y-6 text-xs text-white transition-transform transform ${
              isMenuOpen ? "translate-x-0 duration-500" : "hidden"
            } sm:hidden z-40`}
          >
            {navItem.slice(0, 4).map((item) => (
              <Link key={item.id} to={item.link}>
                <li className="hover:underline px-4">{item.name}</li>
              </Link>
            ))}
          </ul>

          {/* Mobile User Icon or Login Button */}
          <div className="sm:hidden">
            {isAuth ? (
              <div className="flex items-center px-4">
                <div onClick={navItem[4].onclick}>{navItem[4].name}</div>
                {isdrop && (
                  <div className="absolute top-20 mt-6 w-[150px] shadow-lg z-50  right-2">
                    <Userdropdown />
                  </div>
                )}
              </div>
            ) : (
              <Link to={navItem[3].link}>
                <button className="px-4 text-xs">{navItem[3].name}</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Nabvar;
