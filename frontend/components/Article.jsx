import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
    <>
      <div className="grid gap-8 lg:grid-cols-2 mx-10">
        {articles.data
          .map((article) => {
            return (
              <Card article={article} key={`${article.attributes.slug}`} />
            );
          })
          .reverse()}
      </div>
    </>
  );
};

export default Articles;
