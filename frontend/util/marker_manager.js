export default class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];

    this._createMarkerFromCharacter = this._createMarkerFromCharacter.bind(this);
    this._removeMarkers = this._removeMarkers.bind(this);
  }

  updateMarkers(characters){
    this.characters = characters;
    window.markers = [];
    this._removeMarkers();
    this.markers = [];
    this.characters.forEach((char, idx)=>this._createMarkerFromCharacter(char, idx));
    window.markers = this.markers;
  }

  _removeMarkers(){
    this.markers.forEach((marker)=>{
      marker.infowindow.close();
      marker.setMap(null);
    });
  }

  _createMarkerFromCharacter(character, idx) {
    const pos = new google.maps.LatLng(character.latitude, character.longitude);
    const marker = new google.maps.Marker({
      position: pos,
      label: { text: (idx+1).toString() },
      map: this.map,
      characterId: character.id
    });
    marker.infowindow = new google.maps.InfoWindow({
      content: "<img width='120' height='160' src=" + character.picture_url +">" + "<div class='picture-name'>" +
      character.name +"</div>" + "<div class='picture-city'>" +
      character.city +"</div>"
    });
    marker.addListener('click', function() {
      marker.infowindow.open(this.map, marker);
    });
    this.markers.push(marker);
  }

}
