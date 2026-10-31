export default function Newsteller({ style }) {
  return (
    <div
      className="max-w-304 mx-auto flex flex-col items-center text-center px-4"
      style={style}
    >
      <h4 className="text-purple-600 text-xs font-semibold leading-6">
        Newstellers
      </h4>
      <h1 className="text-black dark:text-white text-5xl font-semibold leading-15 mt-3">
        Stories and interviews
      </h1>
      <p className="text-black dark:text-[#c0c5d0] font-regular text-[20px] leading-7.5 mt-6 mb-10 max-w-[700px]">
        Subscribe to learn about new product features, the latest in technology
        , solutions, and updates.
      </p>
      <div className="flex gap-4 items-start flex-wrap">
        <div className="flex flex-col sm:items-center md:items-start gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="py-3 bg-gray-800 dark:bg-white text-gray-500 rounded-xl sm:w-50 md:w-90 px-3 text-white dark:text-black"
            id="text"
          />
          <p className="text-black dark:text-[#C0C5D0] font-regular text-[14px]">
            We care about your data in our{" "}
            <span className="border-b-1">privacy poilicy.</span>
          </p>
        </div>

        <button className="bg-purple-600 px-5 py-3 rounded-xl">
          Subscribe
        </button>
      </div>
    </div>
  );
}
