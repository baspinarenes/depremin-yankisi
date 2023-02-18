"use client";

import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });

export default function LeafletMap({ className, position, animate }: LeafletMapProps) {
  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={true}
      className={className}
      zoomControl={false}
      minZoom={5}
    >
      <Map
        position={position}
        animate={animate}
      />
    </MapContainer>
  );
}

interface LeafletMapProps {
  className: string;
  position: LatLngExpression;
  animate: boolean;
}
