import { useGeolocated } from "react-geolocated"; //npm i react-geolocated --save      
const getLocation = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
        console.log(coords.latitude);
        console.log(coords.longitude);
        return coords;
}

export default getLocation;