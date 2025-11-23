import Image from "next/image";

import MaxWidthContainer from "@/components/MaxWidthContainer";

const AboutSection = () => {
  return (
    <div className="bg-white relative">
      <MaxWidthContainer
        containerClassName="bg-white"
        className="py-12 md:py-16 lg:py-[120px] relative z-10"
      >
        <div className="flex items-center justify-end ">
          <div className="flex flex-col items-start gap-3 justify-start lg:max-w-[516px]">
            <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Who Are We
            </h2>
            <p className="text-base sm:text-lg md:text-lg ">
              Pawshu is a love letter to the beautiful bond we share with our
              pets. Inspired by the Nepali word "pashu," meaning animal or pet,
              Pawshu was born out of pure affection—for the wagging tails, soft
              paws, and joyful moments that make our lives brighter.
              <br />
              At Pawshu, we create handcrafted accessories that celebrate the
              inclusivity of our pets and us.
            </p>
          </div>
        </div>
      </MaxWidthContainer>

      {/* botom part  */}
      <div className="   w-full relative">
        {/* Kenjo image positioned behind the wave */}
        <div className="absolute -top-[76%] left-50 z-10">
          <Image
            src="/kenjo.svg"
            alt="aboutsection"
            width={400}
            height={400}
            className=" object-contain opacity-90"
          />
        </div>
        {/* Wave SVG at the top */}
        <div
          className="absolute -top-30 left-0 w-full overflow-hidden z-20"
          style={{ height: "450px" }}
        >
          <svg
            viewBox="0 0 1440 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C200,50 300,200 480,240 C600,260 650,230 720,220 C790,210 840,230 960,240 C1140,260 1240,100 1440,30 L1440,450 L0,450 Z"
              fill="#FFF8DB"
            />
            <path
              d="M0,30 C200,50 300,200 480,240 C600,260 650,230 720,220 C790,210 840,230 960,240 C1140,260 1240,100 1440,30 L1440,0 L0,0 Z"
              fill="transparent"
            />
          </svg>
        </div>
        <div className="py-12 md:py-16 lg:py-[120px] pb-0 lg:pb-0  pt-32 md:pt-40 lg:pt-[300px] relative z-30 ">
          <div className="flex items-center justify-start bg-[#FFF8DB] ">
            <MaxWidthContainer className="pb-12 md:pb-16 lg:pb-[120px]">
              <div className="flex flex-col items-start gap-3 justify-start lg:max-w-[516px]">
                <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Who Are We
                </h2>
                <p className="text-base sm:text-lg md:text-lg ">
                  Pawshu is a love letter to the beautiful bond we share with
                  our pets. Inspired by the Nepali word "pashu," meaning animal
                  or pet, Pawshu was born out of pure affection for the wagging
                  tails, soft paws, and joyful moments that make our lives
                  brighter.
                  <br />
                  At Pawshu, we create handcrafted accessories that celebrate
                  the inclusivity of our pets and us.
                </p>
              </div>
            </MaxWidthContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
