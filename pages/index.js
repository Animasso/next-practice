import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
export default function Home({ array }) {
  const [data, setData] = useState();
  console.log("data:", data);
  const newWord = () => {
    fetch("api/vocapi")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => error);
  };
  useEffect(() => {
    newWord();
  }, []);
  let randomWord;
  if (data) {
    const array = data.data.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
    console.log("randomWord:", randomWord);
  }
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next Udemy Home</title>
      </Head>
      <h1 className={styles.titre}>Mot au hasard</h1>
      {/* <div className=" mt-5 flex justify-center overflow-hidden rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
        {" "}
        <table className={styles.tableau}>
          <thead>
            <tr>
              <th>English</th>
              <th>Francais</th>
            </tr>
          </thead>
          <tbody>
            {array.map((el, i) => (
              <tr key={i}>
                <td> {el.en}</td>
                <td> {el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <button
        onClick={newWord}
        className=" m-auto block rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
      >
        Get RANDOM WORD
      </button>
      <h2 className=" m-auto mt-6 block w-32 rounded-xl border-2 border-solid bg-white p-5 text-center text-2xl text-lime-500">
        {randomWord}
      </h2>
    </div>
  );
}
export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`);
  const array = data.vocabulary;
  if (array.length === 0) {
    return {
      redirect: {
        destination: "/gallery",
      },
    };
  }
  return {
    props: {
      array,
    },
  };
}
