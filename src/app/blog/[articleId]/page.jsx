export const instant = false;

export default async function ArticleDetail({ params }) {
  const { articleId } = await params;
  const data = await fetch(`https://dev.to/api/articles/${articleId}`);
  const article = await data.json();
  return (
    <div
      className="mx-auto prose"
      dangerouslySetInnerHTML={{ __html: article.body_html }}
    ></div>
  );
}
