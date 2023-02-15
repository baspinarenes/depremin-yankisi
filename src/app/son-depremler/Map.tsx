"use client";

import { LatLngExpression } from "leaflet";
import { TileLayer, useMap } from "react-leaflet";
import CustomMarker from "./Marker";

const Map = (props: MapProps) => {
  const DEFAULT_CENTER: LatLngExpression = [37.486893, 37.297027];

  const map = useMap();

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CustomMarker position={DEFAULT_CENTER} />
    </>
  );
};

export default Map;
interface MapProps {}
