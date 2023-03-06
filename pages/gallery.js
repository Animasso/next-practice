import React from "react";
import Image from "next/legacy/image";
import Sakura from "../public/assets/sakura.jpg";
import SakuraDen from "../public/assets/sakuraDen.jpg";
import SakuraFlower from "../public/assets/sakuraFlower.jpg";
export default function gallery() {
  return (
    <div>
      <Image
        priority
        layout="responsive"
        placeholder="blur"
        src={Sakura}
        width="4912"
        height="2760"
        alt="sakura"
      />
      <Image
        layout="responsive"
        placeholder="blur"
        src={SakuraDen}
        width="6000"
        height="4000"
        alt="sakuraden"
      />
      <Image
        layout="responsive"
        placeholder="blur"
        src={SakuraFlower}
        width="2700"
        height="3600"
        alt="sakuraflow"
      />
      {/* <img src="/assets/sakura.jpg" alt="" />
      <img src="/assets/sakuraDen.jpg" alt="" />
      <img src="/assets/sakuraFlower.jpg" alt="" /> */}
    </div>
  );
}

// 3 1.3 1.8
