import { useQuery } from "@tanstack/react-query";

import { getNews } from "../services/news.service";
import NewsList from "../components/NewsList";
import Hero from "../components/Hero";

export default function HomePage() {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryFn: getNews,
    queryKey: ["news"],
  });

  let content;

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (isSuccess) {
    content = <NewsList dataNews={data} />;
  }

  if (isError) {
    content = <div>{error.message}</div>;
  }

  return (
    <section>
      <Hero />
      {content}
    </section>
  );
}
