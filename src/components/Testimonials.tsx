import React from "react";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="h-full py-8">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-center text-[26px] md:text-[38px] text-[#2D2D2D] font-bold py-4">
          Real Stories from Satisfied Customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div className="bg-white rounded-2xl flex flex-col items-center text-center p-4 lg:p-8 gap-4">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <div>
                <p className="text-[20px] text-[#111827] font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-[14px] text-[#374151] font-light">
                  {testimonial.title}
                </p>
              </div>
              <p className="text-[#2D2D2D] text-[16px] font-normal">
                “{testimonial.message}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
