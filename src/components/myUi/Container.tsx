import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <main className={cn("max-w-[1440px] mx-auto", className)}>{children}</main>;
};

export default Container;
