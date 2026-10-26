import HashTag from "./hashtag";

export default function Card() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1792830047385-1c2cf8493d87"
        alt="img"
        className="aspect-video object-cover block mb-8"
      />
      <a href="#">
        <p className="text-[#6941C6] font-semibold text-sm mb-3">
          Sunday , 1 Jan 2023
        </p>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[#1A1A1A] font-semibold text-[24px]">
            UX review presentations
          </h3>
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
        </div>
        <p className="text-[#667085] font-normal text-md mb-6">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
      </a>
      <HashTag text="design" bgColor="white" textColor="#6941C6" />
      <HashTag text="research" bgColor="white" textColor="#3538CD" />
      <HashTag text="presentation" bgColor="white" textColor="#C11574" />
    </div>
  );
}
