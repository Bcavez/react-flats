import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// import Markers from './markers';

const AnyReactComponent = ({ text }) => <div style={{ background: 'red' }}>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48,
      lng: 2
    },
    zoom: 11
  };

  render() {
    console.log(this.props.lat)
    console.log(this.props.lng)
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={this.props.lat}
          lng={this.props.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    );
  }
}

export default Map;
