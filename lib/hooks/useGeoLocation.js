import { useGeolocated } from "react-geolocated"; //npm i react-geolocated --save
const useGeoLocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return !isGeolocationAvailable
    ? "Geo location not available"
    : !isGeolocationEnabled
    ? "Geo location not enabled"
    : coords;
};

export default useGeoLocation;
