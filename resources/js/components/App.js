import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

export default class App extends Component {

    constructor(props){
      super(props);
    }


    render() {
        return (
          <BrowserRouter>
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
                                onClick={() => {

                                    console.log('ciao')

                                    fetch('/api/api-test')
                                    .then(response => response.json())
                                    .then(data => console.log(data));

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

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
