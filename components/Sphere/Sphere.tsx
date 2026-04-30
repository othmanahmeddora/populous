import Image from "next/image";
import React from "react";

const Sphere = () => {
  return (
    <section>
      <Image
        src="/img/10031.jpg"
        alt="sphere"
        width={500}
        height={500}
        className="w-full"
      />
    </section>
  );
};

export default Sphere;
