import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Mapa extends Component {
  static defaultProps = {
    center: {
      lat: -22.432,
      lng: -46.9582,
    },
    zoom: 17,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        id="Map"
        style={{
          height: "700px",
          width: "100%",
          position: "inherit",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-22.42535322294484}
            lng={-46.951487362065985}
            text="My Marker"
          />
          <AnyReactComponent
            lat={-22.4316255344502855}
            lng={-46.938099329403144}
            text="Santa Rita Reciclagem"
          />
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Mapa;
