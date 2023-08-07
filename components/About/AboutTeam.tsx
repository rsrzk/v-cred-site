import Image from "next/image";

const AboutTeam = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[200px] text-center lg:m-9"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/May_profile.png"
                alt="Law May"
                fill
              />
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Law May
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                3 years experience in venture building and Deep Learning research at PETRONAS. May graduated from Imperial College London (ICL) with a Master of Science in Geophysics. In her spare time, May enjoys dancing to K-Pop and networking despite being a self-proclaimed introvert.
              </p>
              <a href="https://www.linkedin.com/in/may-law" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[200px] text-center lg:m-9"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Rais_profile.png"
                alt="Rais"
                fill
              />
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Ahmad Rais Abd Razak
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                A certified accountant with 4 years experience at PETRONAS. Rais graduated from the University of Sydney in a Bachelor of Commerce, but spent more time exploring the city than studying. He feels every problem can be solved with Excel and Power BI.
              </p>
              <a href="https://www.linkedin.com/in/raisrazak" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>          
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[200px] text-center lg:m-9"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Nian_Wei_profile.png"
                alt="Nian Wei"
                fill
              />
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Tan Nian Wei
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Machine Learning Applied Scientist with 6 years’ experience at PETRONAS Research. Graduated cum laude from Texas A&M University with a Bachelor of Science in Petroleum Engineering. When Nian Wei is not learning the chords to a new ukelele tune, you can find him at a Friday night swing class, knitting a scarf or practicing yoga
              </p>
              <a href="https://www.linkedin.com/in/nianweitan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[200px] text-center lg:m-9"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Zul_profile.png"
                alt="Zulhilmi"
                fill
              />
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Zulilmi Ismail
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Currently heading Innovation & Strategy portfolio at PETRONAS Advanced Materials, Zul is an accomplished Drilling Engineer. He has a Bachelor’s in Petroleum and Natural Gas Engineering from Penn State University. He enjoys making predictions about future outcomes to a mysteriously high degree of accuracy.
              </p>
              <a href="https://www.linkedin.com/in/zulhilmiismail" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
