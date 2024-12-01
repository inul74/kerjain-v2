import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface SubmitProps {
  children: React.ReactNode;
  className?: string;
  variant?: any;
}
const FormSubmit = ({ children, className, variant }: SubmitProps) => {
  return (
    <Button className={cn(className)} variant={variant} type="submit" size="sm">
      {children}
    </Button>
  );
};

export default FormSubmit;
