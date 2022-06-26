import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    receiveUsers(state, action) {
      return {
        ...state,
        ...action.users,
      };
    },
  },
});

const { actions, reducer } = usersSlice;

export const { receiveUsers } = actions;
export default reducer;
