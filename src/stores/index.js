import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { newsApi } from "./news/api";
import { bookmarkReducer } from "./bookmark/slice";

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
  devTools: import.meta.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
