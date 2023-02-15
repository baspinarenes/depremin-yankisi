import { Grid, MenuCard } from "@components/atoms";
import { IconTypes } from "@components/atoms/Icon";
import * as React from "react";

export const Menu: React.FC<MenuProps> = ({ data }) => {
  return (
    <Grid className="px-8">
      {data.map(({ name, link, iconName, iconUrl }) => (
        <MenuCard
          key={name}
          name={name}
          link={link}
          iconName={iconName as IconTypes}
          iconUrl={iconUrl}
        />
      ))}
    </Grid>
  );
};

export interface MenuProps {
  data: Array<{
    name: string;
    link: string;
    iconName?: IconTypes;
    iconUrl?: string;
  }>;
}
