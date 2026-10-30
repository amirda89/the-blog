import Heading from "../components/heading";
import Card from "../components/card";
import Newsteller from "../components/newsteller";
export const instant = false;

export default async function NewstellerPage() {
  const username = "gabrielanhaia";

  const latestData = await fetch(
    `https://dev.to/api/articles?username=${username}&per_page=3`,
  );
  const articles = await latestData.json();
  return (
    <>
      <Newsteller />
      <Heading text="All blog posts" />
      <div className="max-w-304 mx-auto md:grid grid-cols-2 gap-4 lg:grid-cols-3 px-8 xl:p-0 xl:gap-6 mb-7">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
