import Banner from "../components/banner";
import Card from "../components/card";
import Heading from "../components/heading";
export const instant = false;

export default async function Projects() {
  const username = "gabrielanhaia";

  const latestData = await fetch(
    `https://dev.to/api/articles?username=${username}`,
  );
  const latestArticles = await latestData.json();
  return (
    <>
      <Banner text="PROJECTS" />
      <Heading text="List Project" />
      <div className="max-w-304 mx-auto md:grid grid-cols-2 gap-4 px-8 ">
        <Card article={latestArticles[5]} />
        <Card article={latestArticles[6]} />
      </div>
      <div className="max-w-304 mx-auto px-8">
        <Card article={latestArticles[7]} />
      </div>
      <div className="max-w-304 mx-auto md:grid grid-cols-2 gap-4 px-8">
        <Card article={latestArticles[8]} />
        <Card article={latestArticles[9]} />
      </div>
    </>
  );
}
