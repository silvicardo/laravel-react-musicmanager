import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';

// HOME COMPONENT SHOWS CATEGORIES

export default class HomePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      categories: [],
    }
  }

  componentDidMount(){
    this.getCategories();
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

  render(){

    const {categories} = this.state;

    const categoriesListLinks = categories.map(({name,id}, index) =>
      <ListGroupItem key={index}><Link to={`category/${id}`}>{name}</Link></ListGroupItem>
    );

    return (
      <Fragment>

        <div className="mt-5 container jumbotron text-center">
          <h1>Welcome to Music Collection!</h1>
          <p>Pick your favourite category and get top 10 playlist</p>
        </div>
        <div className="container m-auto w-50">
        <ListGroup>
          {categoriesListLinks}
        </ListGroup>
        </div>
      </Fragment>
  )
}

}
