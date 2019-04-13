import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainNavbar from './MainNavbar';
import axios from 'axios';

export default class App extends Component {

    constructor(props){
      super(props);
    }

    render() {


        return (
          <BrowserRouter>
            <MainNavbar navbarLinks={this.props.navLinks}/>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">App Component</div>

                            <div className="card-body">
                                <p>I'm the App component!
                                React Works!</p>
                                <button
                                className="btn btn-primary"
                                onClick={async () => {

                                    console.log('INIZIO LA RICERCA')

                                    const {data} = await axios.get('/api/api-test')

                                    console.log(data);

                                }}
                                >MakeApiCall</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
