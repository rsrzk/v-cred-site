import SectionTitle from "../Common/SectionTitle";
import SinglePortfolio from "./SinglePortfolio";
import portfolioData from "./portfolioData";

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Past Work"
            paragraph="Platforms and prototypes we built with our clients and partners."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
            {portfolioData.map((portfolio) => (
              <SinglePortfolio key={portfolio.id} portfolio={portfolio} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
