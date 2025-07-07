import Image from "next/image";
import React from "react";

function ToolsCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full my-5 lg:w-[30%] rounded-2xl p-4 shadow-2xl flex flex-col items-center lg:items-start">
      <Image
        src={src}
        alt="Tools"
        width={500}
        height={300}
        className="rounded bg-white mb-4"
      />
      <h4 className="font-bold mb-3 text-xl">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default ToolsCard;
