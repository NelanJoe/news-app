import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import BookmarkPage from "./pages/BookmarkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/bookmarks",
        element: <BookmarkPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
