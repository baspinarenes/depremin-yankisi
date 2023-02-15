import { IconTypes } from "@components/atoms/Icon";
import { getFavicon } from "src/utils/common";

type Menu = Array<{ name: string; link: string; iconName?: IconTypes; iconUrl?: string }>;

export const mainMenuItems: Menu = [
  {
    name: "Son Depremler",
    link: "/son-depremler",
    iconName: "earth",
  },
];

export const otherPlatforms = [
  {
    name: "Deprem.io",
    link: "https://deprem.io/",
    iconUrl: getFavicon("http://deprem.io/"),
  },
  {
    name: "Afet Harita",
    link: "https://afetharita.com/",
    iconUrl: getFavicon("https://afetharita.com/"),
  },
];

export const lastLastEarthquakesMenuItems: Menu = [
  {
    name: "Harita",
    link: "/son-depremler/harita",
    iconName: "earth",
  },
  {
    name: "Liste",
    link: "/son-depremler/liste",
    iconName: "list",
  },
];
