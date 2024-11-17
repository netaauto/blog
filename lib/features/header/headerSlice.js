import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedMenu: null,
  isMobileSubMenusOpen: false,
  isLanguageModalOpen: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setSelectedMenu: (state, action) => {
      state.selectedMenu = action.payload;
    },
    setIsMobileSubMenusOpen: (state, action) => {
      state.isMobileSubMenusOpen = action.payload;
    },

    setIsLanguageModalOpen: (state, action) => {
      state.isLanguageModalOpen = action.payload;
    },
  },
});

export const {
  setData,
  setSelectedMenu,
  setIsMobileSubMenusOpen,
  setIsLanguageModalOpen,
} = headerSlice.actions;

export default headerSlice.reducer;
