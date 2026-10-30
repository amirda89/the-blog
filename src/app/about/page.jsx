import Banner from "../components/banner";
import Heading from "../components/heading";
export const instant = false;

export default async function About({}) {
  const userData = await fetch(
    `https://dev.to/api/users/by_username?url=gabrielanhaia`,
  );
  const user = await userData.json();
  return (
    <>
      <Banner text="Gabriel A." />
      <div className="flex justify-center mt-10">
        <img src={user.profile_image} alt="profile" />
      </div>
      <Heading text="About Me" />
      <p className="text-[#1a1a1a] font-normal text-2xl max-w-304 mx-auto mb-8 px-8 xl:p-0 dark:text-[#667085]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolores
        obcaecati quibusdam tempora, esse vel tempore dignissimos, illo
        reprehenderit fugiat ad nobis, quia laborum! Quis ducimus beatae quaerat
        iusto vitae cupiditate unde, velit illo ut cum aperiam alias nam
        excepturi laudantium aut ad eum labore, iure culpa neque. Quisquam
        explicabo qui a nulla facilis, quibusdam eos aspernatur asperiores autem
        consectetur perferendis exercitationem et veniam in? Illum dolorum
        aliquam laboriosam quia.
      </p>
      <Heading text="Skills:" />
      <ul className="text-[#1a1a1a] font-normal text-2xl max-w-304 mx-auto mb-8 px-8 xl:px-4 dark:text-[#667085] list-disc">
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          modi?
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, totam.
        </li>
      </ul>
      <Heading text="Expericence:" />
      <ul className="text-[#1a1a1a] font-normal text-2xl max-w-304 mx-auto mb-8 px-8 xl:px-4 dark:text-[#667085] list-disc">
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          modi?
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, totam.
        </li>
      </ul>
      <Heading text="Education:" />
      <ul className="text-[#1a1a1a] font-normal text-2xl max-w-304 mx-auto mb-8 px-8 xl:px-4 dark:text-[#667085] list-disc">
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          modi?
        </li>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, totam.
        </li>
      </ul>
    </>
  );
}
