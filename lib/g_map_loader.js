
import React, { useState,useEffect } from "react"


import ReactLoading from "react-loading";

import GMap from './map';
export default function GMap_loader(coordinates) {
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if(loading){
      setCoords({"lat":coordinates.latitude, "lng": coordinates.longitude});
      setLoading(false)
    }
   });

  return (
    <div className="App">
       {loading == true ? (
        <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
       ) : (
            <div ><GMap coord={coords} /> </div>
        )
       }
    </div>
  );
}

