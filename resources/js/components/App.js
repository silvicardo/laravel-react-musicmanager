import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
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

      try {
        const {data} = await axios.get('/api/genres')

        this.setState({genres: data},
          //check state after update
          () => {
          console.log('state now has following genres ', this.state.genres);
        });

      } catch {
        console.log('SEARCH ERROR')
      }

    }

    async getArtist(name){

        console.log('INIZIO LA RICERCA ARTISTI')

      try {
        const {data} = await axios.get(`/api/artist/${name || 'Queen'}`);

        this.setState({artistSearchResults: data},
          //check state after update
          () => {
          console.log('state now has following artists for your search', this.state.artistSearchResults);
        });

      } catch {
        console.log('SEARCH ERROR')
      }

    }

    async getSong(title){

        console.log('INIZIO LA RICERCA CANZONI')
        try{
          const {data} = await axios.get(`/api/track/${title || 'we are the champions'}`);
          this.setState({trackSearchResult: data},
            //check state after update
            () => {
            console.log('state now has following tracks for your search', this.state.trackSearchResult);
          });
        } catch {
          console.log('SEARCH ERROR')
        }

    }

    async getCategories(){

        console.log('INIZIO LA POPOLAZIONE CATEGORIE')
        try{
          const {data} = await axios.get(`/api/categories`);
          this.setState({categories: data},
            //check state after update
            () => {
            console.log('state now has following categories list', this.state.categories);
          });
        } catch {
          console.log('SEARCH ERROR')
        }

    }

    async getCategory(name){

        console.log('INIZIO LA RICERCA CATEGORIA SINGOLA')
        try{
          const {data} = await axios.get(`/api/category/${name || 'workout'}`);
          this.setState({categorySearchResult: data},
            //check state after update
            () => {
            console.log('state now has following tracks for your search', this.state.categorySearchResult);
          });
        } catch {
          console.log('SEARCH ERROR')
        }

    }


    render() {

      const {genres} = this.state;

        return (
          <BrowserRouter>
            <MainNavbar navbarLinks={this.props.navLinks}/>
            <div className="container py-5">
            <ButtonGroup>
              <Button onClick={this.getArtist.bind(this,'queen')}>Artists Api Call</Button>
              <Button onClick={this.getSong.bind(this,'nessun dorma')}>Tracks Api Call</Button>
              <Button onClick={this.getCategories.bind(this)}>Categories Api Call</Button>
              <Button onClick={this.getCategory.bind(this,'mood')}>Category Api Call</Button>
            </ButtonGroup>
            </div>
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
