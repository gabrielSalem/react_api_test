import React,{ useEffect, useState } from 'react'

const GeoLocalization = () => {

   const [location,setLocation] = useState({
      loaded: false,
      coordinates: {lat: "", lng: ""}
   });

   const onSucess = (location) => {
      setLocation({
         loaded: true,
         coordinates: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
         },
      });
   }

   const onError = (error) => {
      setLocation({
         loaded: true,
         error: {
            code:error.code,
            message: error.message,
         }
      });
   }

   useEffect(() => {
      if(!("geolocation" in navigator)){
         onError({
            error: {
               code:0,
               message: "Localização não suportada",
            },
         });
      }

      navigator.geolocation.getCurrentPosition(onSucess, onError);
   }, []);
  return location;
}

export default GeoLocalization