import React from "react";
import Link from "next/link";
export default function Liste({ fullList }) {
  console.log(fullList);
  return (
    <div
      className="flex flex-col items-center
    "
    >
      <h1 className="  mt-4  w-96  border-4 border-solid border-green-50 p-2 text-center text-2xl hover:border-dotted">
        Les Listes de Vocabulaire
      </h1>

      <div className=" mt-7 w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        {fullList.map((item, i) => (
          <Link
            className="block w-full cursor-pointer border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
            href={`/liste/${item.name}`}
            key={i}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const fetchData = await import("/data/list.json");
  const fullList = await fetchData.englishList;

  return {
    props: {
      fullList,
    },
  };
}
