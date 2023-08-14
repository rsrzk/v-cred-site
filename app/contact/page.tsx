import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Speak directly to our team by scheduling a call."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
