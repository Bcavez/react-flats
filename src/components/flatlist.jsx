import React, { Component } from 'react';

import Flat from './flat';


class FlatList extends Component {
  render() {
    return (
      this.props.flats.map((flat) => {
        return <Flat flat={flat} key={flat.name} selectFlat={this.props.selectFlat} />;
      })
    );
  }
}

export default FlatList;
