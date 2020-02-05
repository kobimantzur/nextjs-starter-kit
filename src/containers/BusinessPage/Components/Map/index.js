import React, { Component } from 'react';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';
import { GOOGLE_API_KEY } from '../../../../constants';
import CardWrap from '../../../../components/CardWrap';

export const DEF_PROPS = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: '400px' }} />,
  mapElement: <div style={{ height: '100%' }} />,
};
const MyMapComponent = withScriptjs(
  withGoogleMap((props = DEF_PROPS) => {
    if (!props.location || props.location.length === 0) return null;
    const lat = parseFloat(props.location[0]);
    const lng = parseFloat(props.location[1]);
    return (
      <GoogleMap defaultZoom={16} defaultCenter={{ lat, lng }}>
        {props.isMarkerShown && <Marker position={{ lat, lng }} />}
      </GoogleMap>
    );
  }),
);

export default MyMapComponent;
