/* eslint-disable */
import React, { useState } from 'react';
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

const CustomMarker = (props) => {
  const [showMarkerName, setShowMarkerName] = useState(false);

  return (
    <Marker
      position={{ lat: Number(props.lat), lng: Number(props.lng) }}
      onDragEnd={props.onMarkerDragEnd}
      draggable={props.draggable}
      onClick={() => setShowMarkerName(!showMarkerName)}
    >
      {showMarkerName && props.name && (
        <InfoWindow>
          <>{props.name}</>
        </InfoWindow>
      )}
    </Marker>
  );
};

// mapTypeId={google.maps.MapTypeId.ROADMAP}
const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      zoom={props.zoom}
      center={{
        lat: Number(
          props.markerData[0] ? props.markerData[0].point.lat : 20.9101,
        ),
        lng: Number(
          props.markerData[0] ? props.markerData[0].point.lng : 107.1839,
        ),
      }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#444444' }],
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{ color: '#f2f2f2' }],
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'all',
            stylers: [{ visibility: 'simplified' }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit',
            elementType: 'all',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#5e72e4' }, { visibility: 'on' }],
          },
        ],
      }}
    >
      {props.markerData.map((v, i) => {
        return (
          <CustomMarker
            key={i}
            lat={v.point.lat}
            lng={v.point.lng}
            onMarkerDragEnd={props.onMarkerDragEnd}
            draggable={props.draggable}
            name={v.name}
          />
        );
      })}
    </GoogleMap>
  )),
);

class Maps extends React.Component {
  render() {
    const { markerData = [], draggable, onMarkerDragEnd, zoom } = this.props;
    return (
      <MapWrapper
        zoom={zoom}
        onMarkerDragEnd={(v) => {
          const lat = v.latLng.lat();
          const lng = v.latLng.lng();

          onMarkerDragEnd({ lat, lng });
        }}
        markerData={markerData}
        draggable={draggable}
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBZUHgqv0Z4BKC92d1g26bSPPiob2ExkLM'
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{ height: `600px` }}
            className='map-canvas'
            id='map-canvas'
          />
        }
        mapElement={
          <div style={{ height: `100%`, borderRadius: 'inherit' }} />
        }
      />
    );
  }
}

export default Maps;
