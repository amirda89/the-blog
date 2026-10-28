import Banner from "./components/banner";
import Card from "./components/card";
import Heading from "./components/heading";
export const instant = false;

export default async function Home() {
  const data = await fetch(
    "https://dev.to/api/articles?username=annavi11arrea1",
  );
  const articles = await data.json();

  return (
    <>
      <Banner text="THE BLOG" />
      <Heading text="Recent blog posts" />

      <div className="max-w-304 mx-auto px-8 xl:px-0 xl:flex gap-8 flex-1">
        <div className="xl:w-[650px]">
          <img
            src={articles[0].social_image}
            className="h-[228px] mb-6 w-full object-cover"
          />
          <Card article={articles[0]} noImage />
        </div>

        <div className="xl:w-[592px]">
          <div className="md:flex gap-6">
            <img
              className="w-80 h-50 mb-6 object-cover"
              src={articles[1].social_image}
            />
            <div className="flex-1">
              <Card article={articles[1]} noImage noArrow />
            </div>
          </div>

          <div className="md:flex gap-6">
            <img
              className="w-80 h-50 mb-6 object-cover"
              src={articles[2].social_image}
            />
            <div className="flex-1">
              <Card article={articles[2]} noImage noArrow />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-304 px-8 xl:flex gap-8 xl:px-0">
        <img
          className="w-full object-cover h-[200px] md:h-[188px] xl:[246px] mb-6"
          src={articles[3].social_image}
        />
        <Card article={articles[3]} noImage />
      </div>

      <Heading text="All blog posts" />
      <div className="max-w-304 mx-auto md:grid grid-cols-2 gap-4 lg:grid-cols-3 px-8 xl:p-0 xl:gap-6 mb-7">
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
