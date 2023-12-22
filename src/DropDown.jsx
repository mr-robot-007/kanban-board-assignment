import { useDispatch, useSelector } from "react-redux";
import { changeGrouping, changeOrdering } from "./filterSlice";

export default function SelectLabels() {
  const dispatch = useDispatch();
  const { grouping, ordering } = useSelector((state) => state.filter);

  function handleGroupingChange(e) {
    // console.log(e.target.value);
    dispatch(changeGrouping(e.target.value));
  }
  function handleOrderingChange(e) {
    // console.log(e.target.value);
    dispatch(changeOrdering(e.target.value));
  }

  return (
    <div
      className=" absolute top-14 left-4 z-[100] bg-white p-4 rounded-lg shadow-md
    text-sm border-2 border-slate-200 px-3 py-3 rounded-md space-y-1 inline-block"
    >
      <div className="flex items-center justify-between space-x-14">
        <h2 className="">Grouping</h2>
        <select
          className="border-2 rounded-md border-slate-200 w-24 px-2 py-1"
          onChange={handleGroupingChange}
          value={grouping}
        >
          <option value={"status"}>Status</option>
          <option value={"user"}>User</option>
          <option value={"priority"}>Priority</option>
        </select>
      </div>
      <div className="flex items-center justify-between space-x-14">
        <h2 className="">Ordering</h2>
        <select
          className="border-2 rounded-md border-slate-200 w-24 px-2 py-1"
          onChange={handleOrderingChange}
          value={ordering}
        >
          <option value={"priority"}>Priority</option>
          <option value={"title"}>Title</option>
        </select>
      </div>
    </div>
  );
}
