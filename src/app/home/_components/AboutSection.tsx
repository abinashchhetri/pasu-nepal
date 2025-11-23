import Image from "next/image";

import MaxWidthContainer from "@/components/MaxWidthContainer";

const AboutSection = () => {
  return (
    <div className="bg-white relative">
      <MaxWidthContainer
        containerClassName="bg-white"
        className="py-12 md:py-16 lg:py-[120px] relative z-10"
      >
        <div className="flex items-center justify-center lg:justify-end ">
          <div className="flex flex-col items-center lg:items-start gap-3 justify-start w-full lg:max-w-[516px] text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Who Are We
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
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
        <div className="absolute -top-[76%] left-0 lg:left-50 z-10 hidden lg:block">
          <Image
            src="/kenjo.svg"
            alt="aboutsection"
            width={400}
            height={400}
            className="object-contain opacity-90"
          />
        </div>
        {/* Wave SVG at the top */}
        <div className="absolute -top-30 left-0 w-full overflow-hidden z-20 h-[250px] hidden md:block lg:h-[450px]">
          <svg
            viewBox="0 0 1440 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full  h-full"
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
        <div className="py-8 lg:py-[120px] pb-0 lg:pb-0  lg:pt-[200px] relative z-30">
          <div className="flex items-center justify-center lg:justify-start pt-10 md:pt-0 bg-[#FFF8DB]">
            <MaxWidthContainer className="pb-8 lg:pb-[120px]">
              <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-6 lg:gap-0">
                <div className="flex flex-col items-center lg:items-start gap-3 justify-start w-full lg:max-w-[516px] text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                    What we do
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    At Pashu, we specialize in creating charming and culturally
                    inspired accessories and treats for your beloved pets. Our
                    current lineup includes beautifully designed bandanas for
                    both cats and dogs, as well as matching scarves and
                    scrunchies perfect for special occasions like Tihar. We also
                    bake wholesome dog treats, from cookies to muffins, and
                    we're excited to expand into nutritious dehydrated snacks in
                    the future.
                  </p>
                </div>

                <div className="w-full flex items-center justify-center lg:justify-end gap-3 lg:gap-4">
                  <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] bg-white rounded-full overflow-hidden flex items-end justify-end drop-shadow-xl relative">
                    <Image
                      src="/pawsu-icons/aboutsection/about2.svg"
                      alt="aboutsection"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain absolute -bottom-3 lg:-bottom-5 right-0 shadow-lg"
                    />
                  </div>

                  <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] bg-white rounded-full overflow-hidden flex items-end justify-end relative">
                    <Image
                      src="/pawsu-icons/aboutsection/about1.svg"
                      alt="aboutsection"
                      width={500}
                      height={500}
                      className="w-full h-full object-contain absolute -bottom-3 lg:-bottom-5 right-0 shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </MaxWidthContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
