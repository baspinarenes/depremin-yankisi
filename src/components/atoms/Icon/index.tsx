import * as React from "react";
import { IconEarth, IconGoogleMap, IconList } from "./icons";

export type IconTypes = "earth" | "list" | "googleMap";

export const Icon = (props: React.SVGProps<SVGSVGElement> & { name: IconTypes }) => {
  const { name, ...svgProps } = props;

  const Icons: Record<IconTypes, JSX.Element> = {
    earth: <IconEarth {...svgProps} />,
    list: <IconList {...svgProps} />,
    googleMap: <IconGoogleMap {...svgProps} />,
  };

  return Icons[name as IconTypes];
};
