import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./features/questions/questionsSlice";
import usersReducer from "./features/users/usersSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
