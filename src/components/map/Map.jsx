import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";

import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

const Map = ({ items }) => {
  return (
    <MapContainer
      center={[40.6188, 20.7896]}
      zoom={10}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
