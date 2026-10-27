export default function Footer() {
  return (
    <footer className="max-w-304 mx-auto text-center py-7 md:flex items-center gap-3 px-8 xl:px-0">
      <div className="flex flex-col gap-3 md:flex-row">
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
        <a href="">Email</a>
        <a href="">RSS feed</a>
        <a href="">Add to Feedly</a>
      </div>
      <p className="mt-4 md:m-0 md:order-first">&copy; 2023</p>
    </footer>
  );
}
