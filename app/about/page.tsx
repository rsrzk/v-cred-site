import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutTeam from "@/components/About/AboutTeam";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Our journey as a PETRONAS-backed startup."
      />
      {/* <Timeline /> */}
      <AboutSectionOne />
      <AboutTeam />
    </>
  );
};

export default AboutPage;
