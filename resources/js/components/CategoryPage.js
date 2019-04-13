import React, { Component, Fragment } from 'react';
import GenresList from './GenresList';
import axios from 'axios';
import { Button, ButtonGroup } from 'reactstrap';

//CATEGORY PAGE SHOWS CHOSEN CATEGORY DATA

export default class CategoryPage extends Component {

  constructor(props){
    super(props);

    //get url params to obtain the category name
    const {params} = this.props.match

    console.log(params);
    this.state = {
      data: {
        details: {
          //get the category name from url params or get it from default prop
          name: params.name || this.props.name
        },
        playlists:{}
      },
    }
  }

  componentDidMount(){
    this.getCategory(this.state.data.details.name);
  }

  async getCategory(name){

      console.log('INIZIO LA RICERCA CATEGORIA SINGOLA')

      try {
        const {data} = await axios.get(`/api/category/${name}`);

        this.setState({data},
          //check state after update
          () => {
          console.log('state now has following data for your search', this.state.data);
        });
      } catch {
        console.log('SEARCH ERROR')
      }

  }

  render(){

      const {details, playlists} = this.state.data;

      console.log(details)
      return (
        <Fragment>
          <div className="container py-5">
            <h1>Chosen Category</h1>
            {/* show category name if state has been updated  */}
            <h3>{ playlists.hasOwnProperty('items') && details.name || 'Calling Api'}</h3>
            <h2>Playlists</h2>
            <ul>
              {playlists.hasOwnProperty('items') && playlists.items.map(
                ({name},index) => <li key={index}>{name}</li>
              )}
            </ul>
          </div>
        </Fragment>
    )
  }

}

CategoryPage.defaultProps = {
  name: 'pop'
}
