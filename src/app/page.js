import Blog from "./components/blog";
import Card from "./components/card";
import Heading from "./components/heading";

export default function Home() {
  return (
    <>
      <Blog />
      <Heading text="Recent blog posts" />

      <div className="max-w-304 mx-auto px-8 xl:px-0 xl:flex gap-8 flex-1">
        <div className="xl:w-[650px]">
          <img
            src="https://images.unsplash.com/photo-1792830047385-1c2cf8493d87"
            className="h-[228px] mb-6 w-full object-cover"
          />
          <Card noImage />
        </div>

        <div className="xl:w-[592px]">
          <div className="md:flex gap-6">
            <img
              className="w-80 h-50 mb-6"
              src="https://images.unsplash.com/photo-1792830047385-1c2cf8493d87"
            />
            <div className="flex-1">
              <Card noImage noHashTag noArrow />
            </div>
          </div>

          <div className="md:flex gap-6">
            <img
              className="w-80 h-50 mb-6"
              src="https://images.unsplash.com/photo-1792830047385-1c2cf8493d87"
            />
            <div className="flex-1">
              <Card noImage noHashTag noArrow />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-304 px-8 xl:flex gap-8 xl:px-0">
        <img
          className="w-full object-cover h-[200px] md:h-[188px] xl:[246px] mb-6"
          src="https://images.unsplash.com/photo-1792830047385-1c2cf8493d87"
        />
        <Card noImage />
      </div>

      <Heading text="All blog posts" />
      <div className="max-w-304 mx-auto md:grid grid-cols-2 gap-4 lg:grid-cols-3 px-8 xl:p-0 xl:gap-6">
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
