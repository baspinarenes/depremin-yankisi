"use client";

import * as turf from "@turf/turf";
import { LatLngExpression } from "leaflet";
import "leaflet.offline";
import { GeoJSON, LayerGroup, TileLayer, useMap } from "react-leaflet";
import cityBorders from "../../../../public/turkey.json";
import CustomMarker from "./Marker";

const Map = ({ position }: MapProps) => {
  const map = useMap();

  // const turkeyLayer = L.geoJSON(cityBorders as any);
  // map.fitBounds(turkeyLayer.getBounds());

  // useEffect(() => {
  //   map.dragging.disable();
  //   map.doubleClickZoom.disable();
  //   map.scrollWheelZoom.disable();

  //   map.on("moveend", function () {
  //     map.dragging.enable();
  //     map.doubleClickZoom.enable();
  //     map.scrollWheelZoom.enable();
  //   });

  //   setTimeout(() => {
  //     map.flyTo(position, 13, {
  //       duration: 3,
  //       animate: true,
  //       easeLinearity: 50,
  //     });
  //   }, 800);
  // });

  let nearestCityFeature = null;

  for (let i = 0; i < cityBorders.features.length; i++) {
    const feature = cityBorders.features[i];
    const cord: any = Array.from(position as any);
    if (turf.booleanPointInPolygon(cord, feature.geometry as any)) {
      nearestCityFeature = feature;
    }
  }

  return (
    <>
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      <LayerGroup>
        {nearestCityFeature && (
          <GeoJSON
            data={
              {
                type: "FeatureCollection",
                features: [nearestCityFeature as any],
              } as any
            }
            style={{
              color: "red",
              fillColor: "red",
              fillOpacity: 0.05,
              stroke: true,
            }}
          />
        )}
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
}
