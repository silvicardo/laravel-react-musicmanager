import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">App Component</div>

                            <div className="card-body">
                                I'm the App component!
                                React Works!
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
