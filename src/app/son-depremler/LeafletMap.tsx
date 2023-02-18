"use client";

import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });

export default function LeafletMap({ className, position, animate, city }: LeafletMapProps) {
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={true}
      className={className}
      zoomControl={false}
      minZoom={7}
    >
      <Map
        position={position}
        animate={animate}
        city={city}
      />
    </MapContainer>
  );
}

interface LeafletMapProps {
  className: string;
  position: LatLngExpression;
  animate: boolean;
  city: string;
}
