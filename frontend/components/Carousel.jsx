import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
const app = ({ articles }) => {
  const baseUrl = "http://localhost:1337";
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        classNameName="mySwiper"
      >
        {" "}
        {articles.data.slice(-6).map((article) => {
          return (
            <SwiperSlide key={article.attributes.slug}>
              <section className="">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src={`${baseUrl}${article.attributes.banner.data.attributes.formats.small.url}`}
                    />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 line-clamp-2">
                      {" "}
                      {article.attributes.title}
                    </h1>
                    <p className="mb-8 leading-relaxed line-clamp-4">
                      {" "}
                      {article.attributes.excerpt}
                    </p>
                    <div className="flex justify-center items-center gap-2 ">
                      <a
                        href="#_"
                        className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-indigo-500 border border-gray-100 rounded-lg shadow-inner group   hover:no-underline   "
                      >
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 text-white ease-in-out">
                          See full article{" "}
                        </span>
                      </a>
                      <p className="text-gray-600 font-medium">Follow me on:</p>
                      <AiOutlineInstagram className="icon" />
                      <AiOutlineGithub className="icon" />
                      <FaFacebookF className="icon" />
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default app;
