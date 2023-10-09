import React, { FC, useEffect, useRef } from "react";
import { Article } from "../model/article";
import Card1 from "./Card1";

interface HeroCompMiddleCardProps {
  articles: Article[];
}

const HeroCompMiddleCard: FC<HeroCompMiddleCardProps> = ({ articles }) => {
  return (
    <div className="flex-1 flex flex-col border-r gap-2 px-5 ">
      {articles.map((article, index) => (
        <div
          className={
            index === 0 ? "flex flex-col gap-2 border-b" : "flex flex-col gap-2"
          }
          key={index}
        >
          <img
            className="w-full md:h-1/2 xsm:h-[15rem] h-[10rem] cover"
            src={
              article.urlToImage === null
                ? "https://www.shutterstock.com/image-vector/news-anchor-on-tv-breaking-600w-442698565.jpg"
                : article.urlToImage
            }
            alt="article"
          />
          <h2 className="text-[20px] font-bold  text-start	">{article.title}</h2>
          <p className="text-[18px] font-normal text-start">
            {article.description.slice(0, 45)}
          </p>
          <div className="flex justify-start gap-5 items-center">
            <img
              src={article.urlToImage}
              className="w-10 h-10 rounded-full"
              alt="article"
            />
            <p className="text-[12px] font-bold uppercase">{article.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCompMiddleCard;
