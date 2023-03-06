import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Article() {
  const router = useRouter();
  console.log(router);
  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);
  const nameTitle = router.query.slug;
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{nameTitle} Section</title>
      </Head>
      <h1>Article</h1>
    </>
  );
}
