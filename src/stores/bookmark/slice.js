import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: JSON.parse(localStorage.getItem("bookmark")) ?? [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
      localStorage.setItem("bookmark", JSON.stringify(state.bookmarks));
    },
    removeBookmark: (state, action) => {
      state.bookmarks.splice(action.payload, 1);
      localStorage.setItem("bookmark", JSON.stringify(state.bookmarks));
    },
  },
});

export const bookmarkReducer = bookmarkSlice.reducer;
export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
