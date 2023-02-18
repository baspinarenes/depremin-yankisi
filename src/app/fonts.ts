import { Lato, Oswald, Roboto } from "@next/font/google";

export const lato = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
