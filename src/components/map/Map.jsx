import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";

import "./map.scss";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[40.6188, 20.7896]}
      zoom={13}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.6188, 20.7896]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
