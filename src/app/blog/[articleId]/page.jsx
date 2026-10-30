export const instant = false;
import Heading from "@/app/components/heading";
import dayjs from "dayjs";
import Card from "@/app/components/card";
import Newsteller from "@/app/components/newsteller";

export default async function ArticleDetail({ params }) {
  const { articleId } = await params;
  const detailData = await fetch(`https://dev.to/api/articles/${articleId}`);
  const article = await detailData.json();

  const perPage = 12;
  const username = "gabrielanhaia";
  const data = await fetch(
    `https://dev.to/api/articles?username=${username}&per_page=${perPage}`,
  );
  const articles = await data.json();
  return (
    <>
      <div className="mx-auto max-w-[1216px] flex items-center flex-col-reverse md:flex-row md:items-start gap-8">
        <div className="w-[85%] md:w-[30%]">
          <Heading text="Recent blog posts" style={{ marginTop: 0 }} />
          {articles.map((article) => (
            <Card key={article.id} article={article} />
          ))}
        </div>
        <div className="w-[85%] md:w-[70%]">
          <p className="text-[#6941C6] font-semibold text-sm mb-3">
            {dayjs(article?.published_at).format("dddd , D MMM YYYY")}
          </p>
          <h3 className="text-[#1A1A1A] font-semibold text-[24px] dark:text-white">
            {article?.title}
          </h3>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          ></div>
          <Newsteller />
        </div>
      </div>
    </>
  );
}
