
import Col from "./Col";
import { useSelector } from "react-redux";
function Board() {
  const groupingTitle = useSelector((state) => state.filter.grouping);
  const titles = useSelector((state) => state.filter[groupingTitle]);

  const realtitles = useSelector((state) =>
    groupingTitle !== "status"
      ? state.filter[`${groupingTitle}Titles`]
      : state.filter[groupingTitle]
  );
  return (
    <div className=" max-w-full h-[screen] dark:bg-black dark:text-white max-h-full gap-3 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-around px-4 py-5 b bg-gray-100 flex-wrap overflow-hidden  basis-auto ">
      {titles.map((item, i) => (
        <Col
          title={item}
          key={item.id ? item.id : item}
          filterBy={groupingTitle}
          _title={realtitles[i]}
        />
      ))}
    </div>
  );
}

export default Board;
