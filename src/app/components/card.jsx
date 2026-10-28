import HashTag from "./hashtag";
import dayjs from "dayjs";
import stc from "string-to-color";
import Link from "next/link";

export default function Card({ noImage, noArrow, article }) {
  return (
    <div className="mb-8">
      {noImage ? null : (
        <img
          src={article?.social_image}
          alt="img"
          className="aspect-4/3 object-cover block mb-8"
        />
      )}
      <Link href="#">
        <p className="text-[#6941C6] font-semibold text-sm mb-3">
          {dayjs(article?.published_at).format("dddd , D MMM YYYY")}
        </p>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[#1A1A1A] font-semibold text-[24px] dark:text-white">
            {article?.title}
          </h3>
          {noArrow ? null : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          )}
        </div>
        <p className="text-[#667085] font-normal text-md mb-6">
          {article?.description}
        </p>
      </Link>
      {article?.tag_list.map((tag) => (
        <HashTag text={tag} key={tag} bgColor={stc(tag)} />
      ))}
    </div>
  );
}
