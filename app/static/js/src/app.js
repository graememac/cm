import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import List from './components/list.js';
import Detail from './components/detail.js';
import * as Services from './services';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ships: []
    };
  }

  componentWillMount () {

    Services.getShips()
    .end((err, res) => {
      if (err) {
        console.log('err', err);
      } else {

        let shipsData = res.body.ships.map((ship) => {
          return { countryOfOrigin: this.getCountryOfOrigin(ship.owner), ...ship };
        })

        this.setState({
          ships: shipsData
        });
      }
    });
  }

  getCountryOfOrigin (shipOwner) {

    let countryRegex = /.*\((.*)\)/g;
    let match = countryRegex.exec(shipOwner);

    if (match && match[1] !== '') {
      return match[1];
    }
    return 'Unknown';
  }
  
  render () {
    return (
      <Router>
        <div>
          {
            this.state.ships.length === 0 ?

              <div className="loading-gif">
                <img src="/images/loading.gif" />
              </div>
            
            :

              <Switch>
                <Route path="/ship/:id" render={(props) => <Detail ships={this.state.ships} {...props} />} />
                <Route render={() => <List ships={this.state.ships} />}/>
              </Switch>
          }
        </div>
      </Router>
    );
  }
}
  
render(
  <App/>,
  document.getElementById('app') || document.createElement('div')
);