const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#e0e0e0" }] },
  
  {
    featureType: "administrative.country",
    elementType: "geometry",
    stylers: [{ color: "#3a3a3a" }]
  },

  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }]
  },

  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#242424" }]
  },

  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }]
  },

    {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2c2c2c" }]
  },

  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }]
  },

  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#111111" }]
  }
];

export default darkMapStyle;
