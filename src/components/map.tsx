"use client";

import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps";

const Map = () => {
  const position = { lat: -8.838333, lng: 13.234444 };
  return (
    // <div className="w-full h-screen bg-blue-50 rounded-lg flex items-center justify-center">
    //  {/* <p className="text-gray-500">Map View</p> */}
    //  {/* In a real implementation, you would integrate with a mapping service like Google Maps or Mapbox here */}
    // {/* </div> */}
    <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY + ""}>
      <div className="w-full h-screen">
        <GoogleMap zoom={12} center={position} />
      </div>
    </APIProvider>
  );
};

export default Map;
