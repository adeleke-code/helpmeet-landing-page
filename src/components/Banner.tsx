import banner from "../assets/banner-img.png";

function Banner() {
  return (
    <section className="h-full w-full xl:max-w-7xl xl:mx-auto ">
      <div className="pt-4 md:pt-0 px-4 md:px-12 md:my-8 bg-[#2C1618] flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:py-4 xl:py-20 space-y-6 text-[#F8F9FF]">
          <h4 className="text-[26px] lg:text-[38px] font-bold ">
            Tell us what you do, get
            <br /> clients anywhere!
          </h4>
          <p className="text-base md:text-lg">
            Break limits and explore the endless possibilities
          </p>

          <button className="bg-[#009379] text-[#F8F9FF] py-3 px-8 rounded-2xl">
            Join HelpMeet
          </button>
        </div>

        <div className="md:w-1/2 h-full">
          <img src={banner} alt="Lady holding a xesophone" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
