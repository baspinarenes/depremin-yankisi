import { Icon } from "@components/atoms";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { IconTypes } from "../Icon";

export const MenuCard: React.FC<MenuCardProps> = ({ name, link, iconName, iconUrl }) => {
  return (
    <Link
      href={link}
      className={clsx(
        "px-4 py-6 border border-gray-200 rounded-md flex flex-col justify-center items-center gap-2 shadow-md",
        "hover:bg-gray-50"
      )}
    >
      {iconUrl ? (
        <Image
          src={iconUrl}
          alt={`${name} platform icon`}
          width={30}
          height={30}
        />
      ) : (
        <Icon
          name={iconName!}
          className="text-4xl"
        />
      )}
      {name}
    </Link>
  );
};

export interface MenuCardProps {
  name: string;
  link: string;
  iconName?: IconTypes;
  iconUrl?: string;
}
