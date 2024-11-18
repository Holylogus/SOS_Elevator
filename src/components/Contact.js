
import "../styles/Contact.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


export default function Contact() {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 47.33870753623736,
    lng: 19.23393734847873,
  };

  return (
    <div id="Contact">
      <div className="brand">
        <h1>SOS Elevator</h1>
        <button>Ajánlatkérés</button>
      </div>
      <div className="contact">
        <h3>Kapcsolat</h3>
        <p>
          <strong>Email: </strong>soselevator@gmail.com
        </p>
        <p>
          <strong>Tel.: </strong>+36 30 502 18 35
        </p>
        <p>
          <strong>Székhely: </strong>2363 Felsőpakony, Madách Tér 3/2
        </p>
      </div>
      <div className="googleMap">
        <LoadScript googleMapsApiKey="AIzaSyDHfNV303jB4lwEdpo882ddUkrvEP0oaLg">
          <GoogleMap
            mapContainerStyle={mapStyles}
            center={defaultCenter}
            zoom={17}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
