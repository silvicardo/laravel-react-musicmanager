import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Button, ButtonGroup } from 'reactstrap';

// HOME COMPONENT SHOWS CATEGORIES

export default class ArtistsPage extends Component {

  constructor(props){
    super(props);


    this.state = {
      queriedArtist: this.props.queriedArtist,
      artistSearchResults: [],
      searchDone: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }

  async getArtists(name){

      console.log('INIZIO LA RICERCA ARTISTI')

    try {
      const {data} = await axios.get(`/api/artists/${name || 'Queen'}`);

      this.setState({artistSearchResults: data, searchDone: true},
        //check state after update
        () => {
        console.log('state now has following artists for your search', this.state.artistSearchResults);
      });

    } catch {
      console.log('SEARCH ERROR')
    }

  }

  handleSubmit(e){
    e.preventDefault();

    this.getArtists(this.state.queriedArtist)

    e.target.reset();

  }

  handleChange(e) {
    this.state.searchDone = false
   this.setState({ [e.target.name]: e.target.value })
 }

  render(){

    const {artistSearchResults, queriedArtist, searchDone} = this.state;

    let resultUl;

    if (searchDone) {
      resultUl = <Fragment>
                    <h1>Artista cercato: {queriedArtist}</h1>
                    <ul>
                      {artistSearchResults.map((artistObj, index) => <li key={index}>{artistObj.name}</li>)}
                    </ul>
                  </Fragment>
    }

    return (
      <Fragment>
        <div className="container py-5">

          <form className="form-inline my-5" onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label htmlFor="task">Cerca un artista</label>
                <input
                 className="form-control mx-5"
                  type="text"
                  name="queriedArtist"
                  id="queriedArtist"
                  onChange={this.handleChange.bind(this)}
                />
                <button className="btn btn-primary">Add Todo</button>
            </div>
          </form>
          {resultUl}
        </div>
      </Fragment>
  )
}

}

ArtistsPage.defaultProps = {
  queriedArtist: '',
}
