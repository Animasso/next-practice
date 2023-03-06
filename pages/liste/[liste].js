import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
export default function Liste({ listPick }) {
  const router = useRouter();
  console.log("router:", router);
  return (
    <>
      <h1
        className="flex flex-col items-center text-2xl
    "
      >
        Liste of{" "}
        {router.query.liste.charAt(0).toUpperCase() +
          router.query.liste.slice(1)}
      </h1>
      <div className=" mt-5 flex justify-center overflow-hidden rounded-t-xl bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
        {" "}
        <table className={styles.tableau}>
          <thead>
            <tr>
              <th>English</th>
              <th>Francais</th>
            </tr>
          </thead>
          <tbody>
            {listPick.map((el, i) => (
              <tr key={i}>
                <td> {el.en}</td>
                <td> {el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  const slug = context.params.liste;
  const data = await import("/data/list.json");
  const listPick = data.englishList.find((list) => list.name === slug);
  return {
    props: {
      listPick: listPick.data,
    },
  };
}
export async function getStaticPaths() {
  const data = await import("/data/list.json");
  const paths = data.englishList.map((item) => ({
    params: { liste: item.name },
  }));

  return {
    //nom du chemin dynamique et le slug
    // paths: [{ params: { liste: "words" } }],
    paths,
    fallback: false,
  };
}
