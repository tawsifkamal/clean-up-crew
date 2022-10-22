const getAddress = () => {
  const url =
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
    posts[0].location.latitude +
    "," +
    posts[0].location.longitude +
    "&key=" +
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;

  axios.get(url).then((res) => {
    const newAddress = res.data.results[0].formatted_address.split(",");
    setAddress(newAddress);
  });
};

export default getAddress;
