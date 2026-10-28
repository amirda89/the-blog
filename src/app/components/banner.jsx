export default function Banner({ text }) {
  return (
    <div className="border-t-1 border-b-1 font-bold text-[72px] border-[rgba(0,0,0,0.34)] mx-auto max-w-304 text-center leading-normal md:text-[160px] xl:text-[244px] dark:border-white">
      {text}
    </div>
  );
}
