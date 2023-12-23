import Card from "./Card";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";
function Col({ title, filterBy, _title }) {
  const tickets = useSelector((state) => state.filter.tickets);
  const orderBy = useSelector((state) => state.filter.ordering);
  //   if (filterBy === "user") {
  //     title.forEach((item, index, arr) => {
  //       arr[index] = arr[index].id;
  //     });
  //   }
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
  console.log(_title);

  //   const temp = tickets.filter((item) => item.status === "Backlog");
  //   console.log("temp",temp.length)

  //   console.log(title, filterBy);
  //   const custom_tickets = [
  //     {
  //       id: "CAM-7",
  //       priority: 2,
  //       status: "Backlog",
  //       tag: ["Feature Request"],
  //       title: "Create Onboarding Tutorial for New Users",
  //       userId: "usr-1",
  //     },
  //     {
  //       id: "CAM-8",
  //       priority: 2,
  //       status: "Backlog",
  //       tag: ["Feature Request"],
  //       title: "Create Onboarding Tutorial for New Users",
  //       userId: "usr-1",
  //     },
  //   ];

  const custom_tickets = filterArray(tickets, filterBy, title);

  custom_tickets.sort((a, b) => {
    if (orderBy === "priority") {
      return a.priority - b.priority; // Higher priority first
    } else {
      return a.title.localeCompare(b.title); // Alphabetical title order
    }
  });
  //   console.log(customtickets);

  return (
    <div className="flex flex-col gap-2 flex-wrap shrink">
      <div className="flex justify-between mb-5">
        <p className="flex px-2">
          <RadioButtonUncheckedIcon className="p-1" />
          {/* {filterBy === "user" ? title.id : title} */}
          {_title}{" "}
          <p className="dark:text-slate-300 text-slate-500">
            {" "}
            &nbsp; {custom_tickets.length}{" "}
          </p>
        </p>
        <p className="flex px-2 dark:text-slate-300 text-slate-500">
          <AddIcon className="p-0.5" />
          <MoreHorizIcon className="p-0.5" />
        </p>
      </div>

      {custom_tickets.map((ticket) => (
        <Card ticket={ticket} key={ticket.id} />
      ))}
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

export default Col;
