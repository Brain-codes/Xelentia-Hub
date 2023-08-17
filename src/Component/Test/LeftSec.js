import React from "react";
import { NavData } from "./domdom";

const LeftSec = () => {
  console.log(NavData[0].img);

  return (
    <div>
      {" "}
      <>
        <h1>LEFT SIDE</h1>
        <img src={NavData[0].img} alt="" />
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          repellat exercitationem laboriosam molestias reiciendis provident
          itaque nihil corrupti natus, cupiditate, rem tempora architecto velit
          facere officiis accusamus distinctio suscipit voluptas optio at.
          Atque, porro placeat soluta architecto dolor deserunt ex repellat
          tenetur quia velit nesciunt, laudantium nulla rem vel eum consectetur
          totam dolores deleniti sequi quae. Atque, aliquid quaerat quo porro
          doloribus ad quod fugit illo dolor, tempore sequi aspernatur sunt. Et
          fugiat reiciendis inventore nobis vitae, alias culpa eaque ducimus
          laboriosam unde, nemo numquam voluptates molestias. Suscipit qui omnis
          animi ipsa doloremque nesciunt possimus voluptate non. Repudiandae
          saepe dolorem pariatur quis ex veniam non nihil corrupti unde maxime
          aliquid sed fugiat, praesentium sint nisi magnam accusantium odio
          perspiciatis. Ipsam alias nihil ab eius at enim labore eos autem, sed
          earum saepe, hic fuga obcaecati minima possimus numquam quia aliquam
          quisquam rerum impedit neque sapiente. Similique illum saepe earum
          quas, deserunt labore sit illo exercitationem doloremque consequatur
          animi laboriosam nobis doloribus delectus voluptatum cum quisquam,
          placeat qui? Repudiandae, quibusdam nobis amet voluptatum doloribus
          cupiditate illo alias repellendus eligendi culpa ut ex, veniam
          recusandae voluptates dolor! Explicabo quisquam possimus commodi
          repellendus laboriosam quia maxime iure eaque, hic similique odio
          temporibus odit.
        </h5>
      </>
    </div>
  );
};

export default LeftSec;
