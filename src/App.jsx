import { useEffect, useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";

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
      className="bg-gray-100 dark:bg-black h-screen max-h-full  p-0 m-0 overflow-x-hidden max-w-full w-screen "
    >
      <Header />
      <Board />
    </div>
  );
}

export default App;
