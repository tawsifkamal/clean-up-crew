import { useGeolocated } from "react-geolocated"; //npm i react-geolocated --save      

export default function Geolocation() {
    // const [coords, setCoords] = useState();
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    console.log(coords);

    return <div>
        Your latitude is {coords.latitude} and your longitude is {coords.longitude}
    </div>
}