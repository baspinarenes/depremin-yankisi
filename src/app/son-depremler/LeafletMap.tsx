"use client";

import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";
import Map from "./Map";

export default function LeafletMap({ className }: LeafletMapProps) {
  const DEFAULT_CENTER: LatLngExpression = [37.486893, 37.297027];

  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={13}
      scrollWheelZoom={false}
      className={className}
      zoomControl={false}
    >
      <Map />
    </MapContainer>
  );
}

interface LeafletMapProps {
  className: string;
}
