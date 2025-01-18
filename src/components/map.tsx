// //

// // ------------------------------------------------

// "use client";

// const Map = () => {
//   const position = { lat: -8.838333, lng: 13.234444 };

//   return (
//     <div className="w-full h-screen bg-blue-50 flex items-center justify-center">
//       {/* Waze Live Map Embed */}
//       <iframe
//         title="Waze Map"
//         src={`https://embed.waze.com/iframe?zoom=12&lat=${position.lat}&lon=${position.lng}&pin=1`}
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         allowFullScreen
//       />
//     </div>
//   );
// };

// export default Map;

// --------------------------------------------

"use client";

const WazeMapView = ({ selectedDelivery }) => {
  const baseUrl = "https://embed.waze.com/iframe";

  const buildRouteUrl = () => {
    if (!selectedDelivery) {
      return `${baseUrl}?zoom=12&lat=-8.838333&lon=13.234444`;
    }
    const { origin, destination } = selectedDelivery;
    return `${baseUrl}?zoom=12&origin=livemap&from=${origin.lat},${origin.lng}&to=${destination.lat},${destination.lng}`;
  };

  return (
    <div className="flex-1 h-screen">
      <iframe
        title="Waze Map"
        src={buildRouteUrl()}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default WazeMapView;
