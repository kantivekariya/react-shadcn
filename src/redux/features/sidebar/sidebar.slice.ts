import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootState } from "@/redux/store/ConfigureStore"; // Adjust the path

export type SidebarState = {
  isOpen: boolean;
};

const initialState: SidebarState = {
  isOpen: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleOpen, setIsOpen } = sidebarSlice.actions;

export const selectSidebarState = (state: RootState) => state.sidebar;
export const selectOpenState = (state: RootState) => state.sidebar.isOpen;
export const selectGetOpenState = (state: { sidebar: SidebarState }) => {
  const { isOpen } = state.sidebar;
  return isOpen;
};

export const sidebarPersistConfig = {
  key: "sidebar",
  storage,
};

const persistedSidebarReducer = persistReducer(
  sidebarPersistConfig,
  sidebarSlice.reducer
);

export default persistedSidebarReducer;
