import './App.css';
import React from 'react';
import Home from './home/home';

// Class Component
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="app">
      <Home />
    </div>);
  }
}

export default App;
