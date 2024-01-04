import smilingMechanic from "../assets/smiling-mechanic.png";

function About() {
  return (
    <section className="h-full w-full xl:max-w-7xl xl:mx-auto">
      <div className="my-8 p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:mx-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-[#2D2D2D]">
            <h3 className="text-[23px] lg:text-3xl xl:text-4xl font-bold ">
              A <span className="text-[#009379]">lasting Solution</span>
              <br /> to your urgent needs
            </h3>

            <div className="space-y-2">
              <div className="border-l-4 border-l-[#009379] px-2 space-y-1 lg:p-2">
                <h4 className="text-base xl:text-lg text-[#009379] font-semibold">
                  Express quality service delivery
                </h4>
                <p className="text-xs xl:text-sm">
                  Connect with the right artisan to deliver the services you
                  need within minutes.
                </p>
              </div>

              <div className="border-l-4 border-l-[#009379] px-2 space-y-1 lg:p-2">
                <h4 className="text-base xl:text-lg text-[#009379] font-semibold">
                  Best for your budget
                </h4>
                <p className="text-xs xl:text-sm">
                  Services are top rated and top vetted. Prices are best and
                  affordable, project based and competitive.
                </p>
              </div>

              <div className="border-l-4 border-l-[#009379] px-2 space-y-1 lg:p-2">
                <h4 className="text-base xl:text-lg text-[#009379] font-semibold">
                  Secure payments
                </h4>
                <p className="text-xs xl:text-sm">
                  All payments are secured. You know what you will pay upfront.
                  No payment is released until you approve the work.
                </p>
              </div>

              <div className="border-l-4 border-l-[#009379] px-2 space-y-1 lg:p-2">
                <h4 className="text-base xl:text-lg text-[#009379] font-semibold">
                  24/7 support
                </h4>
                <p className="text-xs xl:text-sm">
                  Got questions, queries, complaints or need information or
                  help? We are available 24/7 to attend to you, anywhere!
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 rounded-t-2xl space-y-4">
            <img
              src={smilingMechanic}
              alt="Smiling mechanic with arms crossed holding a spanner"
              className="w-full"
            />

            {/* <Button label="Learn More" primary extraLarge /> */}

            <button className="w-full bg-[#009379] text-[#F8F9FF] rounded-b-2xl py-3 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
