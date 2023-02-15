"use client";

import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { TileLayer, useMap } from "react-leaflet";
import CustomMarker from "./Marker";

const Map = ({ position }: MapProps) => {
  const map = useMap();

  useEffect(() => {
    map.dragging.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();

    map.on("moveend", function () {
      map.dragging.enable();
      map.doubleClickZoom.enable();
      map.scrollWheelZoom.enable();
    });

    setTimeout(() => {
      map.flyTo(position, 13, {
        duration: 3,
        animate: true,
        easeLinearity: 50,
      });
    }, 800);
  });

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CustomMarker position={position} />
    </>
  );
};

export default Map;
interface MapProps {
  position: LatLngExpression;
  animate: boolean;
}
