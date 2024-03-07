import { Link } from "react-router-dom";
import { MoonStarIcon, SunDimIcon } from "lucide-react";

import useDarkMode from "../hooks/useDarkMode";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-500 backdrop-blur-md backdrop-filter dark:bg-slate-700/60">
      <nav className="flex flex-row items-center justify-between h-16 mx-4 max-w-[85rem] 2xl:mx-auto">
        <h2 className="text-xl font-semibold">
          <Link to="/">
            News<span className="text-purple-500">App</span>
          </Link>
        </h2>
        <div className="flex flex-row items-center gap-2">
          <button
            onClick={() => toggleDarkMode()}
            className="p-1 border border-purple-500 border-dashed rounded-md shadow"
          >
            {isDarkMode ? (
              <MoonStarIcon className="w-5 h-5" />
            ) : (
              <SunDimIcon className="w-5 h-5" />
            )}
          </button>

          <Link to="/bookmarks">Bookmarks</Link>
        </div>
      </nav>
    </header>
  );
}
