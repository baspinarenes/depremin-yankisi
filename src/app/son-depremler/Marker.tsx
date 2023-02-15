import L, { LatLngExpression } from "leaflet";
import { Marker } from "react-leaflet";
import markerIcon from "../../../../public/marker.png";

const CustomMarker = ({ position }: CustomMarkerProps) => {
  const icon = new L.Icon({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon.src,
    iconAnchor: undefined,
    popupAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: new L.Point(40, 40),
  });

  return (
    <Marker
      icon={icon}
      position={position}
    />
  );
};

export default CustomMarker;
interface CustomMarkerProps {
  position: LatLngExpression;
}
