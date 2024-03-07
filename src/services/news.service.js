// constant
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getNews = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Error while fetching data...");
    }

    const { articles } = await res.json();

    return articles;
  } catch (error) {
    console.error(error.message);
  }
};
