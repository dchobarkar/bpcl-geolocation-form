"use client";

import { useRouter } from "next/navigation";

const LocationForm = () => {
  const router = useRouter();

  const locationHandler = () => {
    const params = new URLSearchParams(window.location.search);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        params.set("latitude", latitude.toString());
        params.set("logitude", longitude.toString());
        router.push(`${window.location.pathname}?${params.toString()}`);
      },
      (err) => {
        throw new Error("Unable to get Geolocation");
      }
    );
  };

  return (
    <div>
      <button
        className="w-full flex justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={locationHandler}
      >
        Get Location
      </button>
    </div>
  );
};
export default LocationForm;
