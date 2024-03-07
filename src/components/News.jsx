import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import NoImage from "../assets/no-image.jpg";
import { formatDate } from "../lib/FormatDate";
import { addBookmark } from "../stores/bookmark/slice";

export default function News({ news, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddBookmark = (dataNews) => {
    const bookmark = {
      title: dataNews.title,
      url: dataNews.url,
      image: dataNews.urlToImage,
    };

    dispatch(addBookmark(bookmark));
    navigate("/bookmarks");
  };

  return (
    <div
      className={`border border-dashed border-purple-500 dark:border-2 rounded-md shadow-md p-4 break-words ${
        index === 0 || index === 7 || index == 10 || index == 17
          ? "md:col-span-2 md:row-span-2"
          : ""
      }`}
    >
      <div className="space-y-4 group">
        <div className="overflow-hidden rounded-xl">
          <img
            src={`${news?.urlToImage ?? NoImage}`}
            alt={`${news?.title}`}
            className="object-cover object-top w-full h-[120px] group-hover:scale-150 transition-all duration-500"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold transition-all duration-500 group-hover:text-purple-500">
            <Link to={`${news?.url}`} target="_blank">
              {news?.title?.slice(0, 20)}
            </Link>
          </h3>
          <div className="my-3">
            <p>{formatDate(news?.publishedAt)}</p>
          </div>
          {news?.description ? (
            <p className="text-justify">{news?.description?.slice(0, 50)}...</p>
          ) : (
            <p className="italic text-rose-500">Not description content</p>
          )}
        </div>
        <div>
          {news?.author ? (
            <p>Author: {news?.author}</p>
          ) : (
            <p className="italic text-rose-500">Not found author</p>
          )}
        </div>
      </div>
      <div className="my-2">
        <button
          onClick={() => handleAddBookmark(news)}
          className="w-full p-2 font-semibold text-white bg-purple-500 rounded-md"
        >
          Add Bookmark
        </button>
      </div>
    </div>
  );
}

News.propTypes = {
  news: PropTypes.object,
  index: PropTypes.number,
};
