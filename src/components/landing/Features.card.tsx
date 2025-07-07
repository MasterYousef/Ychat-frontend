import React from "react";

function FeaturesCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="flex text-left flex-col pb-10 border-[1px] border-gray-300 w-full lg:w-[30%]  justify-start p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <i className={`text-[var(--main-color)] mb-2 ${icon}`} />
      <h2 className="font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default FeaturesCard;
