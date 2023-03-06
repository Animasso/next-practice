export default function Cours({ result }) {
  return (
    <div className="flex justify-center">
      <h1 className="mt-4  w-96  border-4 border-solid border-green-50 p-2 text-center text-2xl hover:border-dotted">
        {" "}
        Le Btc est a {result.bpi.EUR.rate} euros
      </h1>
    </div>
  );
}
export async function getServerSideProps(context) {
  console.log("context:", context);
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const result = await data.json();
  return {
    props: {
      result,
    },
  };
}
