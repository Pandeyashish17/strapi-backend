import React from "react";
import Link from "next/link";
const CategoryBar = ({ categories }) => {
  return (
    <>
      <header className="text-gray-600 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {categories.data.map((category, i) => {
              return (
                <Link href={`/category/${category.attributes.slug}`} key={i}>
                  <a className="hover:scale-105 transition-all duration-300 hover:bg-gray-800 p-3 rounded-lg hover:no-underline hover:text-white capitalize mr-5">
                    {category.attributes.name}
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default CategoryBar;
