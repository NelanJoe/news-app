import NewsList from "../components/NewsList";
import Hero from "../components/Hero";

import { useGetNewsQuery } from "../stores/news/api";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const { data, isLoading, isSuccess, isError, error } = useGetNewsQuery();
  const [filteredNews, setFilteredNews] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [keyword, setKeyword] = useState("" ?? searchParams.get("keyword"));

  const onKeywordChange = (keyword) => {
    setKeyword(keyword);

    setSearchParams({ keyword });
  };

  useEffect(() => {
    const newFilteredNotes = data?.filter((note) => {
      return note.title
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase());
    });

    setFilteredNews(newFilteredNotes);
  }, [data, keyword]);

  let content;

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (isSuccess) {
    content = <NewsList dataNews={filteredNews} />;
  }

  if (isError) {
    content = <div>{error.message}</div>;
  }

  return (
    <section>
      <Hero />
      <div className="my-2">
        <SearchBar keyword={keyword} onChangeHandler={onKeywordChange} />
      </div>
      {content}
    </section>
  );
}
