import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import './Googlemap.css';


const containerStyle = {
  width: '80vw',
  height: '300px'
};

const center = {
  lat: 51.517204,
  lng: -0.162128
};
const exampleMapStyles = [
  {
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [
        {
            "saturation": "-100"
        }
    ]
},
{
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 65
        },
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": "50"
        },
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "all",
    "stylers": [
        {
            "saturation": "-100"
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [
        {
            "lightness": "30"
        }
    ]
},
{
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [
        {
            "lightness": "40"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
        {
            "hue": "#ffff00"
        },
        {
            "lightness": -25
        },
        {
            "saturation": -97
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
        {
            "lightness": -25
        },
        {
            "saturation": -100
        }
    ]
}
]

const position = {
  lat: 51.517204,
  lng: -0.162128
};

const onLoad = marker => {
  console.log('marker: ', marker)
}


function Googlemap() {
  return (
    <LoadScript
      googleMapsApiKey= "process.env.API_KEY" language="en" 
    >
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      options={{
            styles: exampleMapStyles,
        }}
      >
      <Marker
      onLoad={onLoad}
      position={position}
      />

      </GoogleMap>

    </LoadScript>
  )
}

export default Googlemap;