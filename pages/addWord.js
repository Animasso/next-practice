import { useEffect, useRef, useState } from "react";

export default function AddWord() {
  const submitWord = (e) => {
    e.preventDefault();
    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };
    fetch("api/vocapi", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    enWord.current.value = "";
    frWord.current.value = "";
  };

  useEffect(() => {}, []);
  const enWord = useRef();
  const frWord = useRef();
  const [english, setEnglish] = useState();
  return (
    <div className=" mt-9 flex  flex-col items-center justify-center">
      <form onSubmit={submitWord}>
        <div className=" mb-6">
          <label
            htmlFor="addEn"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Ajouter un mot en anglais
          </label>
          <input
            ref={enWord}
            type="text"
            id="addEn"
            className="block w-80  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
        <div className=" mb-6">
          <label
            htmlFor="textFR"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Ajouter un mot en francais
          </label>
          <input
            ref={frWord}
            type="text"
            id="textFR"
            className="block w-80  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="m-auto block w-40 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
