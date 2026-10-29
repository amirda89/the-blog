export const instant = false;
import Heading from "@/app/components/heading";
import dayjs from "dayjs";

export default async function ArticleDetail({ params }) {
  const { articleId } = await params;
  const data = await fetch(`https://dev.to/api/articles/${articleId}`);
  const article = await data.json();
  return (
    <>
      <div className="mx-auto max-w-[1216px] flex">
        <div>
          <Heading text="Recent blog posts" />
        </div>
        <div>
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
        </div>
      </div>
    </>
  );
}
