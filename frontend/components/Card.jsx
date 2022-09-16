import React from "react";
import Link from "next/link";
import TimeAgo from "timeago-react";

const Card = ({ article }) => {
  return (
    <>
      <Link href={`/article/${article.attributes.slug}`}>
        <article className="p-6  rounded-lg border border-gray-200 shadow-md dark:border-gray-700 transition-all duration-500 hover:scale-105">
          <div className="flex justify-between items-center mb-5 text-gray-500 ">
            {article.attributes.categories.data.map((category, i) => {
              return (
                <span
                  className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 capitalize"
                  key={i}
                >
                  {category.attributes.name}
                </span>
              );
            })}

            <span className="text-sm">
              {" "}
              <TimeAgo datetime={article.attributes.createdAt} />
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  line-clamp-1">
            <a href="#" className="hover:no-underline">
              {" "}
              {article.attributes.title}
            </a>
          </h2>
          <p className="mb-5 font-light text-gray-700  line-clamp-3">
            {article.attributes.excerpt}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                className="w-7 h-7 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <span className="font-medium dark:text-white">Jese Leos</span>
            </div>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Read more
            </a>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Card;
