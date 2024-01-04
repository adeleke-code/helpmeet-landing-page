import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section w-full h-[450px] lg:h-[680px]">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />

      {/* Text */}
      <div className="absolute h-full w-[90%] text-[#F8F9FF] z-[3] text-center mx-4 md:mx-16 top-[20%] md:top-[30%] lg:top-[40%] bottom-0">
        <div className="w-full flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold">
            Let the right{" "}
            <span className="text-[#009379]">
              Artisans <br />
              help
            </span>
            , we sabi!
          </h1>
          <h2 className="text-base lg:text-lg md:w-[80%] lg:w-[60%]">
            Excellent services and products delivery by the best, highly skilled
            artisans and professionals alive tailored to your needs.
          </h2>

          <div className="relative w-full md:w-[500px] text-lg">
            <input
              type="text"
              placeholder="Search for any service..."
              className="bg-[#F8F9FF] text-[#2D2D2D] w-full py-2 px-4 rounded-xl focus:outline-none border"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3 bg-[#009379] rounded-r-xl">
              <FaSearch color="#F8F9FF" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
