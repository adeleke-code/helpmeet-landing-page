import React from "react";

const categories = [
  "Design",
  "Business",
  "Construction",
  "Fashion",
  "Tech",
  "Craft",
  "Repair",
];

function Categories() {
  return (
    <div className="hidden md:block sticky top-20 right-0 left-0 z-20 h-12 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {categories.map((category) => (
          <span
            key={category}
            className="inline-block px-2 md:px-4 lg:px-8 py-2 text-sm font-semibold text-gray-500 md:text-lg"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Categories;
