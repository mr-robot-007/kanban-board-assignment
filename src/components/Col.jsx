import Card from "./Card";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";
function Col({ title, filterBy, _title }) {
  const tickets = useSelector((state) => state.filter.tickets);
  const orderBy = useSelector((state) => state.filter.ordering);
  const x = title;

  function filterArray(array, filterBy, value) {
    return array.filter((item) => {
      switch (filterBy) {
        case "status":
          return item.status === value;
        case "priority":
          return item.priority === value; // Example for filtering by name
        case "user":
          return item.userId === value.id;
        default:
          return false; // Handle invalid filterBy values
      }
    });
  }
  

  const custom_tickets = filterArray(tickets, filterBy, title);

  custom_tickets.sort((a, b) => {
    if (orderBy === "priority") {
      return a.priority - b.priority; // Higher priority first
    } else {
      return a.title.localeCompare(b.title); // Alphabetical title order
    }
  });

  return (
    <div className="flex flex-col gap-2 flex-wrap shrink">
      <div className="flex justify-between mb-2">
        <p className="flex px-2">
          <RadioButtonUncheckedIcon className="p-1" />
          {/* {filterBy === "user" ? title.id : title} */}
          {_title}{" "}
          <span className="dark:text-slate-300 text-slate-500">
            {" "}
            &nbsp; {custom_tickets.length}{" "}
          </span>
        </p>
        <p className="flex px-2 dark:text-slate-300 text-slate-500">
          <AddIcon className="p-0.5" />
          <MoreHorizIcon className="p-0.5" />
        </p>
      </div>

      {custom_tickets.map((ticket) => (
        <Card ticket={ticket} key={ticket.id} />
      ))}
    </div>
  );
}

export default Col;
