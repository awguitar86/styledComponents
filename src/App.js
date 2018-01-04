import React, { Component } from 'react';
import Button from './Components/Button';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Styled Components</h1>
        </header>
        <Button>I'm a styled button</Button>
        <Button primary>Primary Button</Button>
      </div>
    );
  }
}

export default App;
