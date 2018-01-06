import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

class List extends Component {

  render () {
    return (
      <ul className="list">
        {
          this.props.ships.map((ship, index) =>
            <li key={index}>
              <Link className="item" to={'/ship/' + index}>
                
                <h1 className="title">
                  { ship.name }
                </h1>
                
                <p>
                  Country of origin: { ship.countryOfOrigin }
                </p>

                <p>
                  TEU: { ship.maxTEU }
                </p>
              </Link>
            </li>
          )
        }
      </ul>
    );
  }
}

export default List