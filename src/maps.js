import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    mapClicked(mapProps, map, clickEvent) {
        console.log("jiu")
    }
    render() {

        return (
            <Map google={this.props.google} zoom={14} onClick={this.mapClicked}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAi4YQe4kG5uzNXaigteqzEBsBxvd3qqDY")
})(MapContainer)