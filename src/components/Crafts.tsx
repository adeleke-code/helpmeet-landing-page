import React from "react";
import crafts from "../data/crafts";

function Crafts() {
  return (
    <section className="h-full">
      <div className="max-w-7xl mx-auto py-2 flex gap-2 flex-wrap items-center justify-center border-b-gray-500 border-b-2">
        {crafts.map((craft) => (
          <span
            key={craft.icon}
            className="border border-[#E5F4F2] rounded-full flex gap-1 items-center justify-center flex-row p-2 text-[#2D2D2D] md:text-lg hover:bg-[#E5F4F2] hover:border-[#009379]"
          >
            <img src={craft.icon} alt={craft.name} />
            {craft.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Crafts;
