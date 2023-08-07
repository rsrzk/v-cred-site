import { Brand } from "@/types/brand";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const brandsData: Brand[] = [
  {
    id: 0,
    name: "Cofundr",
    href: "https://https://cofundr.com.my/",
    image: "/images/brands/cofundr.png",
  },
  {
    id: 1,
    name: "By Sarah Ahmad",
    href: "https://bysarahahmad.com/",
    image: "/images/brands/BSA.svg",
  },
  {
    id: 2,
    name: "T&K Premium Resources",
    href: "https://https://tkpremium.com.my/",
    image: "/images/brands/TK.png",
  },
  {
    id: 3,
    name: "Darryl, Edward & Co.",
    href: "https://darryledward.co/",
    image: "/images/brands/darryl_edwardco.png",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle
              title="Clients and partners"
              paragraph="Companies we've been happy to develop solutions with"
              center
              mb="80px"
            />
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-16 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image 
          src={image}
          alt={name}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </a>
    </div>
  );
};
