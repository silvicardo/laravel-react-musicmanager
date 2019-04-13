import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainNavbar from './MainNavbar';
import GenresList from './GenresList';
import axios from 'axios';

export default class App extends Component {

    constructor(props){
      super(props);

      this.state = {
        genres: [],
      }
    }

    componentDidMount(){
      this.getGenres();
    }

    async getGenres(){

        console.log('INIZIO LA RICERCA')

        const {data} = await axios.get('/api/api-test')

        this.setState({genres: data},
          //check state after update
          () => {
          console.log('state now has following genres ', this.state.genres);
        });

    }

    render() {

      const {genres} = this.state;

        return (
          <BrowserRouter>
            <MainNavbar navbarLinks={this.props.navLinks}/>
            <GenresList genres={genres}/>
          </BrowserRouter>
        );
    }
}

App.defaultProps = {
  navLinks: ['this', 'is', 'testing'],
};

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
