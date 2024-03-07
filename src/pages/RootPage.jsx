import { Outlet } from "react-router-dom";

import Header from "../components/Header";

export default function RootPage() {
  return (
    <>
      <Header />
      <main className="py-8 mx-4 max-w-7xl lg:mx-auto">
        <Outlet />
      </main>
    </>
  );
}
