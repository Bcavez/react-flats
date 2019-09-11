import React, { Component } from 'react';

import FlatList from './flatlist';
import Map from './map';
import Flats from '../../data/flats';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLat: "",
      selectedLng: ""
    };
  }

  selectFlat = (lat, lng) => {
    console.log(lat, lng);
    this.setState({
      selectedLat: lat,
      selectedLng: lng
    });
  }

  render() {
    return (
      <div className="body">
        <div className="flat-list">
          <FlatList flats={Flats} selectFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <Map lat={this.state.selectedLat} lng={this.state.selectedLng} />
        </div>
      </div>
    );
  }
}

export default App;
