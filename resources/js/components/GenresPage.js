import React, { Component, Fragment } from 'react';
import GenresList from './GenresList';
import axios from 'axios';
import { Button, ButtonGroup } from 'reactstrap';

// HOME COMPONENT SHOWS CATEGORIES

export default class GenresPage extends Component {

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

  render(){

    const {genres} = this.state;

    return (
      <Fragment>
        <GenresList genres={genres}/>
      </Fragment>
  )
}

}
