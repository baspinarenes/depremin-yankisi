"use client";

import L, { LatLngExpression } from "leaflet";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import { Marker } from "react-leaflet";

const CustomMarker = ({ position }: CustomMarkerProps) => {
  const icon2 = new L.Icon({
    iconUrl: iconMarker.src,
    iconRetinaUrl: iconRetina.src,
    iconSize: new L.Point(24, 38.4),
  });

  return (
    <Marker
      icon={icon2}
      position={position}
    />
  );
};

export default CustomMarker;
interface CustomMarkerProps {
  position: LatLngExpression;
}
