import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import RadioButtonUncheckedTwoToneIcon from "@mui/icons-material/RadioButtonUncheckedTwoTone";

function Card({ ticket }) {
  return (
    <div className="dark:bg-[#1c212b]  dark:text-slate-300 shadow-3xl text-slate-500 border-2 border-[#ffffff22] dark:shadow-md rounded-md px-4 py-3 bg-white">
      <header className="flex justify-between">
        <h2 className="font-light ">{ticket.id}</h2>
        <AccountCircleIcon />
      </header>
      <h2 className="text-wrap font-semibold text-left text-black dark:text-white my-1">
        <RadioButtonUncheckedTwoToneIcon className="p-0.5 font-extralight" />
        {ticket.title}
      </h2>
      <div className="flex space-x-2 items-center mt-2 font-light">
        <div className="flex items-center border-2 border-slate-100 dark:border-[#ffffff22] rounded-md">
          <SignalCellularAltIcon className=" py-1 pr-2 " />
        </div>
        <div className="flex items-center border-2 border-slate-100 dark:border-[#ffffff22] rounded-md">
          <FiberManualRecordIcon className="p-1" />
          <p className="text-sm pr-1"> {ticket.tag} </p>
          {/* <p className="text-sm pr-1"> {ticket.priority} </p> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
