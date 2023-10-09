import React, { FC, useEffect, useRef } from "react";
import { Article } from "../model/article";
import Card1 from "./Card1";

interface HeroCompRightCardProps {
  articles: Article[];
}

const HeroCompRightCard: FC<HeroCompRightCardProps> = ({ articles }) => {
  return (
    <div className="flex flex-col sm:gap-5 gap-10">
      {articles.map((article, index) => (
        <div
          className={
            index === 4
              ? "flex flex-1  justify-center items-start flex-col py-5 gap-2 px-5"
              : "flex flex-1 border-b justify-center items-start py-5 flex-col gap-2 px-5"
          }
          key={index}
        >
          <div className="flex gap-5 items-center">
            <div className="text-[#BFC3C9] text-[48px] font-normal">
              {index + 1}
            </div>
            <div>
              <h2 className="text-[16px]  text-start	">{article.title}</h2>

              <p className="text-[12px] font-bold text-start uppercase">
                {article.author}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCompRightCard;
