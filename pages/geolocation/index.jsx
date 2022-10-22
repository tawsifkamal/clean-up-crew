import { useGeolocated } from "react-geolocated"; //npm i react-geolocated --save      
import ScoringAlgo from "../../lib/scoringAlgo";

export default function Geolocation() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 50000,
        });

    const dummy1 = {
        latitude: 42.734105,
        longitude: -97.170793
    } 
    
    const dummy2 = {
        latitude: 44.964798,
        longitude: -101.974663
    }
    
    const dummyMany = [
        {
            latitude: 15.01758,
            longitude: -40.84018
        },
        {
            latitude: 32.84213,
            longitude: -80.91003
        },
        {
            latitude: 44.964798,
            longitude: -101.974663
        },
        {
            latitude: 47.964798,
            longitude: -87.974663
        },
        {
            latitude: 38.964798,
            longitude: -120.974663
        },
        {
            latitude: 50.964798,
            longitude: -90.974663
        },    
    ]
    console.log(coords);
    const score = 0 // ScoringAlgo(coords, dummyMany, dummy1);
    return !isGeolocationAvailable ? "Geolocation not available" : !isGeolocationEnabled ? "Geolocation is not enabled" : <div>
        Your latitude is {coords.latitude} and your longitude is {coords.longitude}
        Your score is {score}
    </div>
}