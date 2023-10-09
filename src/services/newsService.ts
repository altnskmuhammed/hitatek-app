import { Article } from "../model/article";
import api from "./api";

export const getArticles = async () => {
  try {
    const response = await api.get("everything", {
      params: {
        q: "tesla",
        from: "2023-09-09",
        sortBy: "publishedAt",
        apiKey: "979e531681bc408dbfe50246e6b72d9b",
      },
    });
    const filteredArticles = response.data.articles.filter(
      (article: Article) =>
        article.author !== null && article.urlToImage !== null
    );
    return filteredArticles;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
