import Layout from "../HOC/Layout";
import Carousel from "../components/Carousel";
import Articles from "../components/Article";

export default function Home({ articles, categories }) {
  return (
    <>
      <Layout categories={categories}>
        <Carousel articles={articles} />
        <Articles articles={articles} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const articlesRes = await fetch(
    "http://localhost:1337/api/articles?populate=*"
  );
  const articles = await articlesRes.json();
  const categoriesRes = await fetch("http://localhost:1337/api/categories");
  const categories = await categoriesRes.json();

  return {
    props: {
      articles,
      categories,
    },
    revalidate: 60,
  };
}
