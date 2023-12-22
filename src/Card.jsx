import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import RadioButtonUncheckedTwoToneIcon from "@mui/icons-material/RadioButtonUncheckedTwoTone";

function Card({ticket}) {
  return (
    <div className=" border-2 border-slate-200 rounded-md px-4 py-3 bg-white">
      <header className="flex justify-between">
        <h2 className="font-light">{ticket.id}</h2>
        <AccountCircleIcon />
      </header>
      <h2 className="text-wrap font-semibold text-left  my-1">
        <RadioButtonUncheckedTwoToneIcon className="p-0.5 font-extralight" />
        {ticket.title}
      </h2>
      <div className="flex space-x-2 items-center mt-2 font-light">
        <div className="flex items-center border-2 border-slate-100 rouned-md">
          <SignalCellularAltIcon className=" py-1 pr-2 " />
        </div>
        <div className="flex items-center border-2 border-slate-100 rouned-md">
          <FiberManualRecordIcon className="p-1" />
          <p className="text-sm pr-1"> {ticket.tag} </p>
          {/* <p className="text-sm pr-1"> {ticket.priority} </p> */}

        </div>
      </div>
    </div>
  );
}

export default Card;
