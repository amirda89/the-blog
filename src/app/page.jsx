import Banner from "./components/banner";
import Card from "./components/card";
import Heading from "./components/heading";
import PageNumber from "./components/pageNumber";
import Link from "next/link";
export const instant = false;

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const perPage = 6;
  const username = "gabrielanhaia";

  const latestData = await fetch(
    `https://dev.to/api/articles?username=${username}`,
  );
  const latestArticles = await latestData.json();

  const data = await fetch(
    `https://dev.to/api/articles?username=${username}&per_page=${perPage}&page=${page}`,
  );
  const articles = await data.json();

  const previousPage = Math.max(page - 1, 1);
  const nextPage = Math.min(page + 1, 4);
  // const hasPrevious = page > 1;
  // const hasNext = page < 4;

  return (
    <>
      <Banner text="THE BLOG" />
      <Heading text="Recent blog posts" />

      <div className="max-w-304 mx-auto px-8 xl:px-0 xl:flex gap-8 flex-1">
        <div className="xl:w-[650px]">
          <img
            src={latestArticles[0].social_image}
            className="h-[228px] mb-6 w-full object-cover"
          />
          <Card article={latestArticles[0]} noImage />
        </div>

        <div className="xl:w-[592px]">
          <div className="md:flex gap-6">
            <img
              className="w-80 h-50 mb-6 object-cover"
              src={latestArticles[1].social_image}
            />
            <div className="flex-1">
              <Card article={latestArticles[1]} noImage noArrow />
            </div>
          </div>

          <div className="md:flex gap-6">
            <img
              className="w-80 h-50 mb-6 object-cover"
              src={latestArticles[2].social_image}
            />
            <div className="flex-1">
              <Card article={latestArticles[2]} noImage noArrow />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-304 px-8 xl:flex gap-8 xl:px-0">
        <img
          className="w-full object-cover h-[200px] md:h-[188px] xl:[246px] mb-6"
          src={latestArticles[3].social_image}
        />
        <Card article={latestArticles[3]} noImage />
      </div>

      <Heading text="All blog posts" />
      <div className="max-w-304 mx-auto md:grid grid-cols-2 gap-4 lg:grid-cols-3 px-8 xl:p-0 xl:gap-6 mb-7">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>

      <div className="max-w-304 mx-auto px-8 xl:p-0 border-t-1 border-black dark:border-white mb-5"></div>

      <div className="max-w-304 mx-auto flex justify-between px-8 xl:p-0 flex-wrap mb-7">
        <Link
          className="flex items-center gap-1 cursor-pointer hover:text-gray-500"
          href={`?page=${previousPage}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          Previous
        </Link>
        <div className="flex items-center gap-1">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
            <PageNumber
              key={num}
              number={num}
              href={`?page=${num}`}
              isActive={num === page}
            />
          ))}
        </div>
        <Link
          className="flex items-center gap-1 cursor-pointer hover:text-gray-500"
          href={`?page=${nextPage}`}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
