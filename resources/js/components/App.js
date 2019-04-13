//IMPORTS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// PAGINE E COMPONENTI
import HomePage from './HomePage';
import GenresPage from './GenresPage.js';
import CategoryPage from './CategoryPage.js';
import ArtistsPage from './ArtistsPage.js';
import MainNavbar from './MainNavbar';

export default class App extends Component {

    render() {

      return (
        <Router>
          <MainNavbar navbarLinks={this.props.navLinks}/>

          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/genres" component={GenresPage}/>
            <Route exact path="/artists" component={ArtistsPage}/>
            <Route path="/category/:name" component={CategoryPage}/>
          </Switch>
        </Router>
      );
    }
}

App.defaultProps = {
  navLinks: ['genres', 'artists'],
};

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
