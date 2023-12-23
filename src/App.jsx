import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Board from "./Board";

import DropDown from "./DropDown";
import { useDispatch } from "react-redux";
import { updateTickets, updateUserTitles, updateUsers } from "./filterSlice";

function App() {
  const dispatch = useDispatch();
  localStorage.theme = "light";
  useEffect(
    function () {
      async function loadData() {
        const res = await fetch(
          "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
        );
        const data = await res.json();
        // console.log(data);
        dispatch(updateTickets(data.tickets));
        dispatch(updateUsers(data.users));
        dispatch(updateUserTitles(data.users.map((item) => item.name)));
      }
      loadData();
    },
    [dispatch]
  );

  return (
    <div
      className="bg-white  p-0 m-0 overflow-x-hidden max-w-full w-screen "
      // onClick={() => turnToggleOff}
    >
      <Header />
      <Board />
    </div>
  );
}

export default App;
