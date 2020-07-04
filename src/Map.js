import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '25%'
};

export class MapContainer extends Component {
    render(){
        return( 
                
                <Map 
                    google={this.props.google}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={{
                    lat: 42.418119,
                    lng: -88.617001
                }}
                >
                <Marker
                 />
                </Map>
                 

        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAhppQLz9k7UZvpWIoMCBENv2rnl66PoC8'
})(MapContainer);
