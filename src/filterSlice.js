import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   grouping: "priority",
//   ordering: "title",
// };
const groupingData = localStorage.getItem("grouping");
const orderingData = localStorage.getItem("ordering");

const initialState = {
  grouping: groupingData ? groupingData : "status",
  ordering: orderingData ? orderingData : "title",
  status: ["Backlog", "Todo", "In progress", "Done", "Cancelled"],
  priorityTitles: ["No Priority","Low", "Medium", "High", "Urgent"],
  priority: [1,2, 3, 4,5],
  tickets: [],
  user: [],
  userTitles:[]
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeGrouping(state, action) {
      state.grouping = action.payload;
      localStorage.setItem("grouping", action.payload);
    },
    changeOrdering(state, action) {
      state.ordering = action.payload;
      localStorage.setItem("ordering", action.payload);
    },
    updateTickets(state, action) {
      state.tickets = action.payload;
    },
    updateUsers(state, action) {
      state.user = action.payload;
    },
    updateUserTitles(state,action) {
        state.userTitles = action.payload
    }
  },
});

export const { changeGrouping, changeOrdering, updateTickets, updateUsers, updateUserTitles } =
  filterSlice.actions;

export default filterSlice.reducer;

