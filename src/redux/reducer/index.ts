import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebar.slice";
import themeReducer from "../features/theme/theme.slice";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
});

export default rootReducer;
