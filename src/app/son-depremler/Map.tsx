"use client";

import { LatLngExpression } from "leaflet";
import "leaflet.offline";
import cityBorders from "public/turkey.json";
import { useEffect } from "react";
import { GeoJSON, LayerGroup, TileLayer, useMap } from "react-leaflet";
import CustomMarker from "./Marker";

const Map = ({ position, city }: MapProps) => {
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
      map.flyTo(position, 9, {
        duration: 2,
        animate: true,
        easeLinearity: 50,
      });
    }, 800);
  });

  // let nearestCityFeature = null;

  // for (let i = 0; i < cityBorders.features.length; i++) {
  //   const feature = cityBorders.features[i];
  //   if (turf.booleanPointInPolygon([position[1], position[0]], feature.geometry as any)) {
  //     nearestCityFeature = feature;
  //   }
  // }

  return (
    <>
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      <LayerGroup>
        <GeoJSON
          data={cityBorders as any}
          style={(feature: any) => {
            switch (feature.properties.name) {
              case city:
                return {
                  color: "red",
                  fillColor: "red",
                  fillOpacity: 0.2,
                  weight: 3,
                };
              default:
                return { color: "gray", stroke: false, fill: false, weight: 1 };
            }
          }}
        />
      </LayerGroup>
      <LayerGroup>
        <CustomMarker position={position} />
      </LayerGroup>
    </>
  );
};

export default Map;
interface MapProps {
  position: LatLngExpression;
  animate: boolean;
  city: string;
}
