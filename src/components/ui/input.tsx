import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full bg-transparent placeholder:text-[#a1a1aa] placeholder:font-light placeholder:text-[14px] disabled:cursor-not-allowed disabled:opacity-50  focus:outline-none outline-none border-b border-[#ede9fe] focus:border-blue-300 transition-padding duration-500 px-[2px] pb-0 focus:pb-2 focus:border-b-[2px] text-blue-950 text-[14px]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
