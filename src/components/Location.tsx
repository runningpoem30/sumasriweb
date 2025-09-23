import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';

// Custom marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -20],
});

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface City {
  name: string;
  coords: LatLngTuple;
}

// Supply locations
const supplyLocations: { base: LatLngTuple; cities: City[] } = {
  base: [16.9360, 82.2388], // Kakinada, AP
  cities: [
    { name: 'Delhi', coords: [28.6139, 77.2090] },
    { name: 'Mumbai', coords: [19.0760, 72.8777] },
    { name: 'Pune', coords: [18.5204, 73.8567] },
    { name: 'Hyderabad', coords: [17.3850, 78.4867] },
    { name: 'Chennai', coords: [13.0827, 80.2707] },
    { name: 'Kolkata', coords: [22.5726, 88.3639] },
    { name: 'Bengaluru', coords: [12.9716, 77.5946] },
    { name: 'Bhubaneshwar', coords: [20.2961, 85.8245] },
    { name: 'Kochi', coords: [9.9312, 76.2673] },
    { name: 'Chandigarh', coords: [30.7333, 76.7794] },
  ],
};

// Helper: create a simple curved line using midpoint offset
const createCurve = (start: LatLngTuple, end: LatLngTuple): LatLngTuple[] => {
  const mid: LatLngTuple = [
    (start[0] + end[0]) / 2 + 2, // latitude offset for curve
    (start[1] + end[1]) / 2,     // keep longitude centered
  ];
  return [start, mid, end];
};

const SupplyMap = () => {
  return (
    <MapContainer
      center={[20.5937, 78.9629]} // Center on India
      zoom={5.5}
      minZoom={4.5}
      maxBounds={[
        [6, 68],   // SW corner of India
        [37, 97],  // NE corner of India
      ]}
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Base Location */}
      <Marker position={supplyLocations.base} icon={redIcon}>
        <Popup>Kakinada, AP (Our Supply Base)</Popup>
      </Marker>

      {/* City Markers */}
      {supplyLocations.cities.map((city, idx) => (
        <Marker key={idx} position={city.coords} icon={redIcon}>
          <Popup>{city.name}</Popup>
        </Marker>
      ))}

      {/* Curved Lines from Base to Cities */}
      {supplyLocations.cities.map((city, idx) => (
        <Polyline
          key={idx}
          positions={createCurve(supplyLocations.base, city.coords)}
          color="blue"
          weight={2}
        />
      ))}
    </MapContainer>
  );
};

export default SupplyMap;
