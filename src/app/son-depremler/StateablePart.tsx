"use client";

import clsx from "clsx";
import { useState } from "react";
import { oswald } from "src/app/fonts";
import { EarthquakeCard } from "src/app/son-depremler/EarthquakeCard";
import { useEarthquake } from "src/lib/useEarthquake";
import EarthquakeImage from "../../../public/earthquake.jpg";

export default function StateablePart() {
  const [earthquakeFilter, setEarthquakeFilter] = useState("");

  const { earthquakes, isError } = useEarthquake({});

  if (!earthquakes || isError) {
    return null;
  }

  const filteredEarthquakes = earthquakes.filter((earthquake) =>
    JSON.stringify(Object.values(earthquake))
      .toLocaleLowerCase("tr-TR")
      .includes(earthquakeFilter.toLocaleLowerCase("tr-TR"))
  );

  return (
    <>
      <input
        type="text"
        className="max-w-5xl mx-auto bg-gray-100 border-t border-x border-gray-200 w-full h-10 px-4 xs:px-8 outline-gray-200 placeholder:text-sm placeholder:text text-gray-500 -mt-10"
        placeholder="Filtrelemek için şehir, ilçe ya da büyüklük girin."
        value={earthquakeFilter}
        onChange={(e) => setEarthquakeFilter(e.target.value)}
      />
      <div className="max-w-5xl mx-auto w-full">
        {filteredEarthquakes.map((earthquake, index) => (
          <EarthquakeCard
            key={earthquake.eventID}
            data={earthquake}
            index={index}
          />
        ))}
      </div>
      <div
        className={clsx(
          "mt-6 p-4 h-screen w-screen relative bg-bottom text-2xl xs:text-3xl xs:leading-[40px] sm:text-4xl sm:leading-[48px] sm:p-12 lg:text-6xl lg:leading-[80px] lg:p-12 text-[rgba(255,255,255,0.8)] font-bold",
          oswald.className
        )}
        style={{
          backgroundImage: `url(${EarthquakeImage.src})`,
        }}
      >
        BİLDİĞİMİZ GİBİ ÜLKEMİZ DEPREM KUŞAĞINDA OLAN VE BİRÇOK DEPREM YAŞAYAN BİR ÜLKEDİR. ELİMİZDE İSTATİSTİKLERE
        RAĞMEN ALINMAYAN ÖNLEMLER SEBEBİYLE CANLARIMIZ YİTİP GİTMEKTEDİR. ALLAH BİLİME OLAN İNANCIMIZI ARTTIRSIN VE
        KALDIRAMAYACAĞIMIZ ACILARI SIRTIMIZA YÜKLEMESİN.
        <span
          className={clsx("absolute bottom-4 text-sm font-normal text-[#999] left-[calc(50%-38px)]", oswald.className)}
        >
          Resim: Sputnik
        </span>
      </div>
    </>
  );
}
