import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import Switcher from "./Switcher";

function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleDivRef = useRef(null);

  function handleToggle() {
    setToggle(!toggle);
  }

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (
  //         toggleDivRef.current &&
  //         !toggleDivRef.current.contains(event.target)
  //       ) {
  //         // console.log(
  //         //   toggleDivRef.current && !toggleDivRef.current.contains(event.target)
  //         // );
  //         setToggle(false);
  //         console.log(toggleDivRef.current.contains(event.target));
  //         // console.log(event.target);
  //       }
  //     };
  //     document.addEventListener("click", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //     };
  //   }, [toggle]);

  return (
    <div className=" dark:bg-[#1c212b]  relative">
      <div className="header flex items-center justify-between px-4 py-3">
        <div
          ref={toggleDivRef}
          className=" dark:bg-[#1c212b] dark:text-white flex space-x-1  shadow-md bg-white items-center border-2 border-[#ffffff22] rounded-md px-2 py-1 text-slate-800"
          onClick={handleToggle}
        >
          <TuneIcon />
          <h2 className="text-s">Display</h2>
          {toggle ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          {/* <KeyboardArrowDownIcon /> */}
        </div>

        <h2>
          {/* <DarkModeIcon /> */}
          <Switcher />
        </h2>
      </div>
      {toggle ? <DropDown /> : null}
    </div>
  );
}

export default Header;
