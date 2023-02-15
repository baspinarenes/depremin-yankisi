import clsx from "clsx";
import * as React from "react";

export const Grid: React.FC<GridProps> = ({ children, className }) => {
  return <div className={clsx("grid grid-cols-2 sm:grid-cols-6 gap-4", className)}>{children}</div>;
};

export interface GridProps {
  children: React.ReactNode;
  className: string;
}
