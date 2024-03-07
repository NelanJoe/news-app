import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NoImage from "../assets/no-image.jpg";
import { removeBookmark } from "../stores/bookmark/slice";

export default function BookmarkPage() {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);

  return (
    <section>
      <h2 className="my-6 text-xl font-semibold underline decoration-dashed underline-offset-4 decoration-purple-500">
        Bookmark news
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {bookmarks?.length > 0 ? (
          <>
            {bookmarks?.map((bookmark, index) => (
              <div
                key={bookmark?.title}
                className="relative flex flex-col gap-2 p-4 border border-purple-500 border-dashed rounded-md lg:flex-row"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={`${bookmark?.image ?? NoImage}`}
                    alt={`${bookmark?.title}`}
                    className="object-cover object-top lg:w-[120px] lg:h-[120px]"
                  />
                </div>
                <Link
                  to={`${bookmark?.url}`}
                  target="_blank"
                  className="text-lg font-semibold"
                >
                  {bookmark?.title}
                </Link>
                <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-2">
                  <button
                    onClick={() => dispatch(removeBookmark(index))}
                    className="flex items-center justify-center w-8 h-8 font-semibold text-center text-white bg-red-500 rounded-full"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-red-500 ">Not found data</p>
        )}
      </div>
    </section>
  );
}
