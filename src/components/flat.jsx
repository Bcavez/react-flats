import React, { Component } from 'react';


class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  handleClick = () => {
    this.setState({ active: !this.state.active });
    this.props.selectFlat(this.props.flat.lat, this.props.flat.lng);
  }

  render() {
    const {
      name,
      imageUrl,
      price,
      priceCurrency,
      lat,
      lng,
      selectFlat
    } = this.props.flat;
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    };

    const card = `card ${this.state.active ? "active" : ""}`;
    return (
      <div className={card} style={style} onClick={this.handleClick}>
        <div className="card-category">
          {price}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
