import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.505, -0.09]; // Example coordinates (London)

function Map() {
    return (
        <MapContainer center={position} zoom={13} style={{ height: '400px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;