import Blog from "./components/blog";
import Card from "./components/card";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Blog />
      <div className="max-w-304 mx-auto md:grid grid-cols-2 gap-4 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
