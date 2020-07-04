import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '20%',
  border: '1px solid black',
  zIndex: '1'
};

export class MapContainer extends Component {
    render(){
        return( 
                
                <Map 
                    google={this.props.google}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={{
                    lat: 42.418301,
                    lng:  -88.617482
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
