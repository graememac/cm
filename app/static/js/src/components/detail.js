import React, { Component } from 'react';

class Detail extends Component {

  render () {
    return (
      <div className="detail">

        <h1 className="title">
          { this.props.ships[this.props.match.params.id].name }
        </h1>

        <div className="category">
          <span>
            Country of origin: 
          </span>

          <span>
            { this.props.ships[this.props.match.params.id].countryOfOrigin }
          </span>
        </div>

        <div className="category">
          <span>
            Built: 
          </span>

          <span>
            { this.props.ships[this.props.match.params.id].built }
          </span>
        </div>

        <div className="category">
          <span>
            Length Meters: 
          </span>

          <span>
            { this.props.ships[this.props.match.params.id].lengthMeters }
          </span>
        </div>

        <div className="category">
          <span>
            Beam Meters: 
          </span>

          <span>
            { this.props.ships[this.props.match.params.id].beamMeters }
          </span>
        </div>

        <div className="category">
          <span>
            TEU: 
          </span>

          <span>
            { this.props.ships[this.props.match.params.id].maxTEU }
          </span>
        </div>

        <div className="category">
          <span>
            Owner: 
          </span>

          <span>
            { this.props.ships[this.props.match.params.id].owner }
          </span>
        </div>

        <div className="category">
          <span>
            Gross Tonnage: 
          </span>

          <span>
            { this.props.ships[this.props.match.params.id].grossTonnage }
          </span>
        </div>
      </div>
    );
  }
}

export default Detail