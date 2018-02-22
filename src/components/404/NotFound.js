import React, { Component } from 'react';


class NotFoundPage extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">404 Not Found</h1>
        </header>
        <p className="App-intro">
          We are sorry but we could not find the page you looking for.
        </p>
      </div>
    );
  }
}

export default NotFoundPage;