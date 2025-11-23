import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full lg:px-[9.72%] md:px-[5%] px-[2%] ",
        containerClassName
      )}
    >
      <div className={cn("max-w-[1140px] w-full mx-auto  ", className)}>
        {children}
      </div>
    </div>
  );
};

export default MaxWidthContainer;
