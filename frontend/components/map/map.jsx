import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});



class Map extends Component {
  constructor(props){
    super(props);
    this.center = props.address;
    this.fillInAddress = this.fillInAddress.bind(this);
  }

  componentDidMount() {
    let result;
    const createMap = address => {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': address}, (results, status) => {
        result = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}

        const _mapOptions = {
          center: result,
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        const map = this.refs.map;
        this.map = new google.maps.Map(map, _mapOptions);
        this.addressInput = document.getElementById('address-input');
        this.autocomplete = new google.maps.places.Autocomplete(this.addressInput);
        this.autocomplete.addListener('place_changed', this.fillInAddress);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.characters);
      });
    }
    createMap(this.center);

  }

  componentDidUpdate() {
    if(this.MarkerManager){
      this.MarkerManager.updateMarkers(this.props.characters);
    }
  }

  fillInAddress(){
    var place = this.autocomplete.getPlace();
    console.log(place);
    this.addressInput.value = place.formatted_address;
  }

  render() {

    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(Map);
