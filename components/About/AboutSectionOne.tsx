import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="A team of data enthusiasts."
                paragraph="Our journey started in November 2022 under PETRONAS Innovation Garage (PING), an in-house accelerator program designed to allow internal employees to incubate ideas into investible ventures. Among the 61 idea submissions from the first PING cohort, V-Cred was shortlisted as one of the top 5 venture teams to develop and launch the idea with the goal of spinning off a company out of PETRONAS. Since then, we have been exploring and validating our solutions directly with clients by listening intently to their pain points and drawing inspiration from our team's diverse backgrounds."
                mb="44px"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/ping-demo-day.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
