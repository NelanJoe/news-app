import { Link } from "react-router-dom";
import { ArrowUpRightFromCircleIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="mb-8 lg:mx-auto max-w-7xl">
      <div className="p-6 space-y-3 rounded-md bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-400">
        <h2 className="text-2xl font-semibold text-white">News App</h2>
        <p className="text-white">
          News App is your one-stop shop for reliable and up-to-date news,
          delivered directly to your web browser. Ditch the app overload and
          access a streamlined news experience on any device, anywhere.
        </p>
        <div>
          <button className="px-4 py-2 border-2 rounded-md shadow-md text-slate-700 border-slate-700 bg-amber-500">
            <Link to="https://newsapi.org/" target="_blank">
              <div className="flex flex-row items-center gap-3">
                <span className="text-lg font-medium capitalize">
                  Visit Official Api
                </span>
                <ArrowUpRightFromCircleIcon className="w-4 h-4" />
              </div>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
