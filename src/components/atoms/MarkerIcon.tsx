import L from "leaflet";

const MarkerIcon = new L.Icon({
  iconUrl: require("../../../public/marker.png"),
  iconRetinaUrl: require("../../../public/marker.png"),
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { MarkerIcon };
