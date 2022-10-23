import axios from "axios";

const getAddress = (setAddress, coords) => {
  const url =
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
    coords.latitude +
    "," +
    coords.longitude +
    "&key=" +
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;

  axios.get(url).then((res) => {
    const newAddress = res.data.results[0].formatted_address.split(",");
    setAddress(newAddress[0] + newAddress[1] + newAddress[2].substring(0, 3));
  });
};

export default getAddress;
