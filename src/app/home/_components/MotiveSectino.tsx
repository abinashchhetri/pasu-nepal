import MaxWidthContainer from "@/components/MaxWidthContainer";
import motosectionData from "@/lib/constants/motosection";
import Image from "next/image";

const MotiveSectino = () => {
  return (
    <MaxWidthContainer
      containerClassName="bg-[#E3F8E1] relative "
      className="py-12 md:py-16 lg:py-[120px]"
    >
      <span className="absolute -top-[3%] lg:-top-[5%] left-0">
        <Image
          src="/pawsu-icons/pinkpaw.svg"
          alt="motosection"
          width={100}
          height={100}
          className="w-12 h-12 lg:w-[100px] lg:h-[100px]"
        />
      </span>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full justify-between ">
        {motosectionData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col max-w-[85%] lg:max-w-[234px] gap-2 md:gap-2.5 lg:gap-3"
          >
            <Image
              src={`/pawsu-icons/motosection/${item.image}`}
              alt="motosection"
              width={76}
              height={76}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-[76px] lg:h-[76px]"
            />

            <h3 className="text-lg md:text-xl lg:text-[30px] font-bold">
              {item.title}
            </h3>

            <p className="text-xs md:text-sm lg:text-base text-[#161821]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </MaxWidthContainer>
  );
};

export default MotiveSectino;
