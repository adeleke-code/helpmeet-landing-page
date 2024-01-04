import features from "../data/features";

function Features() {
  return (
    <section className="h-full w-full xl:max-w-7xl xl:mx-auto py-8">
      <div className="p-4 bg-white">
        <h2 className="text-center text-[26px] md:text-[38px] text-[#2D2D2D] font-bold py-4">
          Everything you need, is right here
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {features.map((feature) => (
            <div
              key={feature.icon}
              className="p-2 md:p-4 bg-[#F8F9FF] w-[48%] md:w-[30%] lg:w-[20%] flex flex-col items-center justify-center gap-2 rounded-2xl"
            >
              <div className="rounded-2xl bg-[#E5F4F2] p-4">
                <img src={feature.icon} alt={feature.name} />
              </div>
              <p className="text-sm md:text-base xl:text-lg text-[#2D2D2D]">
                {feature.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
