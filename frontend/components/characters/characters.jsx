import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import Map from '../map/map';

class Characters extends React.Component {
	constructor(props) {
		super(props);
		this.address = "kansas city";
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openInfoWindow = this.openInfoWindow.bind(this);
	}

	componentDidMount(){
		this.props.fetchCharacters(this.address);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.fetchCharacters(this.address);
	}

	openInfoWindow(id){
		window.markers.forEach((marker) => {
			if (id === marker.characterId) {
				google.maps.event.trigger(marker, 'click');
			}
		})
	}

	render() {
		let characters = this.props.characters.map((character, idx) => {
			let link = <li key={character.id} className="single-character"
			onClick={()=>this.openInfoWindow(character.id)}>
			{idx+1}. {character.name} is in {character.city}
			</li>;
			return link;
		});
  	return (
			<div className="content">
				<div className="left-panel">
					<div className="location-form">
						<div className="location-form-header">See Which Marvel Characters Are Around You!</div>
						<form onSubmit={this.handleSubmit}>
							<label>Enter a location: </label>
							<input className="location-input" type="text" id="address-input" onChange={(e) => this.address = e.currentTarget.value}/>
							<div onClick={this.handleSubmit} className="location-button">Submit</div>
						</form>
					</div>
					<div className="characters-list">
						{characters}
					</div>
				</div>
				<div className="map-container">
					<Map characters={this.props.characters} address={this.address}/>
				</div>
			</div>
		);
	}

}

export default withRouter(Characters);
