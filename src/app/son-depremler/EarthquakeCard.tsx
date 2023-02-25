"use client";

import clsx from "clsx";
import { differenceInMinutes } from "date-fns";
import format from "date-fns/format";
import trLocale from "date-fns/locale/tr";
import { useRef, useState } from "react";
import { lato } from "src/app/fonts";
import useScrollControl from "src/hooks/useScrollController";
import { Earthquake } from "src/models/interfaces";
import LeafletMap from "./LeafletMap";

export const EarthquakeCard: React.FC<EarthquakeCardProps> = ({ data, index }) => {
  const cardRef = useRef(null);
  const cardHeaderRef = useRef(null);
  const [openedDetail, setOpenedDetail] = useState(false);

  const formattedDate = format(new Date(data.date), "dd LLL y - HH:mm", {
    locale: trLocale,
  });

  const getColor = (value: number) => {
    if (value <= 3) {
      return "text-yellow-400";
    } else if (value <= 7) {
      return "text-orange-400";
    } else if (value <= 10) {
      return "text-red-500";
    }

    return "text-gray-200";
  };

  const getBgColor = (value: number) => {
    if (7 <= value) {
      return "text-red-500";
    }

    return "";
  };

  const magnitudeText = String(data.magnitude);
  const currentDate = new Date();
  const occursLastHalfHour = differenceInMinutes(currentDate, new Date(data.date)) < 30;

  useScrollControl(!openedDetail);

  return (
    <div
      ref={cardRef}
      className={clsx(
        "earthquake-card first:border-t last:border-b-0 flex flex-col",
        getBgColor(Number(data.magnitude)),
        occursLastHalfHour && !openedDetail && "animate-shake",
        !occursLastHalfHour && openedDetail && "lg:animate-none"
      )}
      onClickCapture={(e: any) => {
        (cardRef.current as any).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }}
    >
      <div
        ref={cardHeaderRef}
        className={clsx("flex items-center gap-4 px-4 xs:px-8 py-3 cursor-pointer hover:bg-gray-50", {
          "border-b": !openedDetail,
        })}
        onClickCapture={(e: any) => {
          setOpenedDetail((prev) => !prev);
          e.stopPropagation();
        }}
      >
        {/* <a
          href={`https://maps.google.com/?q=${data.coordinate.lat},${data.coordinate.lon}&ll=${data.coordinate.lat},${data.coordinate.lon}&z=8`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            name="googleMap"
            fontSize={24}
          />
        </a> */}

        <div>
          <div className="font-semibold leading-6 break-word">
            {data.location.district ? `${data.location.district}, ${data.location.city}` : data.location.full}
          </div>
          <div>{formattedDate}</div>
        </div>

        <div
          className={clsx(
            "text-4xl font-semibold flex-shrink-0 ml-auto flex items-center gap-6",
            lato.className,
            getColor(Number(data.magnitude))
          )}
        >
          <div
            className={clsx(
              "text-xl font-semibold flex-shrink-0 ml-auto text-gray-400 hidden sm:flex sm:flex-col",
              lato.className
            )}
          >
            <span className="text-sm text-right">Derinlik:</span>
            {data.depth} km
          </div>

          {magnitudeText.includes(".") ? magnitudeText : `${magnitudeText}.0`}
        </div>
      </div>
      {openedDetail && (
        <div className="w-screen sm:w-full h-screen overflow-hidden">
          <LeafletMap
            className="w-full h-full lg:absolute lg:left-0 lg:right-0"
            position={[Number(data.coordinate.lat), Number(data.coordinate.lon)]}
            animate={true}
            city={data.location.city}
          />
        </div>
      )}
    </div>
  );
};

export interface EarthquakeCardProps {
  data: Earthquake;
  index: number;
}
