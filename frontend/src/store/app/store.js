import { configureStore } from "@reduxjs/toolkit";
import statReducer from "../features/statdata/statSlice";
import certificateReducer from "../features/certificatedata/certificateSlice";
import transactionReducer from "../features/transactiondata/transactionSlice";

export const store = configureStore({
  reducer: {
    stat: statReducer,
    certificate: certificateReducer,
    transaction: transactionReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
