import MaxWidthContainer from "@/components/MaxWidthContainer";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="relative bg-[#FCF6E7] min-h-[calc(100vh-200px)] flex items-center py-8 md:py-12 lg:py-0">
      <div
        className="absolute top-0 left-0 md:-left-[20%] lg:-left-[32%] w-full h-full z-0"
        style={{
          backgroundImage: "url(/hersection.svg)",
          backgroundPosition: "left center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <MaxWidthContainer className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 md:gap-12 lg:gap-0">
        <div className="text-[#0B3669] w-full lg:max-w-[653px] flex flex-col gap-4 md:gap-6 lg:gap-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl  font-bold leading-tight">
            Accessories For Pet And Their Human
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl font-semibold">
            Cherish the little moments with accessories made just for both of
            you.
          </p>
        </div>

        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
          {/* Circular pattern of stars */}
          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index * 360) / 6;

            const pastelColors = [
              "#FFB6C1", // Light pink
              "#B0E0E6", // Light blue
              "#FFFACD", // Light yellow
              "#DDA0DD", // Light purple
              "#98FB98", // Light green
              "#FFD4B3", // Light peach
              "#E0E6FF", // Light lavender
              "#FFE4E1", // Misty rose
            ];

            const color = pastelColors[index % pastelColors.length];

            // Responsive radius: 50% of container width (scales with container)
            const radiusPercent = 50;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${
                    Math.cos((angle * Math.PI) / 180) * radiusPercent
                  }%)`,
                  top: `calc(50% + ${
                    Math.sin((angle * Math.PI) / 180) * radiusPercent
                  }%)`,
                  transform: "translate(-50%, -50%)",
                  transformOrigin: "center",
                }}
              >
                <IoStarSharp
                  size={36}
                  style={{ color: color }}
                  className="drop-shadow-lg w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[70px] lg:h-[70px]"
                />
              </div>
            );
          })}

          <Image
            src="/hersectiondog.svg"
            alt="herosection"
            width={500}
            height={500}
            className="relative z-10 w-full h-full object-contain"
          />
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default HeroSection;
