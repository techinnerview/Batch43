import './App.css';
import React from 'react';
import App2 from './App2';

// Class Component
class App extends React.Component {

  // Mounting 1
  constructor(props) {
    super(props);
    this.state = {
      name: "Edureka",
      age: "15",
      address: "UK !!"
    }
  }
  
  render() {
    return (
      <div className="App">
        <App2
          name={this.state.name}
          age={this.state.age}
          address={this.state.address}
        >
        </App2>
      
      </div>
    );
  }
}

export default App;
