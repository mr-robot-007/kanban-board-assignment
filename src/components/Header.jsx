import TuneIcon from "@mui/icons-material/Tune";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import Switcher from "./Switcher";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleDivRef = useRef(null);

  function handleToggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggleDivRef.current &&
        !toggleDivRef.current.contains(event.target)
      ) {
        setToggle(false);
        console.log(event.target);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggle]);

  return (
    <div className=" dark:bg-[#1c212b] bg-white  flex items-center justify-between px-4 py-3">
      <div
        ref={toggleDivRef}
        className="header relative flex items-center justify-between "
      >
        <div
          className=" dark:bg-[#1c212b] dark:text-white flex space-x-1  shadow-3xl bg-white items-center border-2 border-[#ffffff22] rounded-md px-2 py-1 text-slate-800"
          onClick={handleToggle}
        >
          <TuneIcon />
          <h2 className="text-s">Display</h2>
          <MdKeyboardArrowDown 
            className={`${
              toggle ? "rotate-180 " : "rotate-0 "
            }    duration-300`}
          />
        </div>

        {toggle ? <DropDown /> : null}
      </div>
      <h2>
        <Switcher />
      </h2>
    </div>
  );
}

export default Header;
