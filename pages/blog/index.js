import React from "react";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1 className=" bg-lime-500">Le blog</h1>
      <Link href={`/blog/article`}> Article lien</Link>
    </div>
  );
}
