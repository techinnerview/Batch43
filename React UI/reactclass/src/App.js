import './App.css';
import React from 'react';
import App2 from './App2';
import App3 from './App3';
import CarouselComponent from './carouselComponent';


// Class Component
class App extends React.Component {

  // Mounting 1
  constructor(props) {
    super(props);
    this.state = {
      name1: "Edureka First",
      age1: "15",
      address1: "UK !!",
      name2: "Edureka Second",
      age2: "20",
      address2: "UK !!",
      dataFromChild: 0
    }
  }

  updateParent = (data) => {
    this.setState({ dataFromChild: data });
  }

  render() {
    return (<div className="app">
      <CarouselComponent />
    </div>);
    // return this.state.dataFromChild === 0 ? (
    //   <div className="App">
    //     <h1>{this.state.dataFromChild}</h1>
    //     <App2
    //       name={this.state.name1}
    //       age={this.state.age1}
    //       address={this.state.address1}
    //       updateTheParent={this.updateParent.bind(this)}
    //     >
    //     </App2>  
    //   </div>
    // ) : (
    //   <div className="App">
    //     <h1>{this.state.dataFromChild}</h1>
    //     <App3
    //       name={this.state.name2}
    //       age={this.state.age2}
    //       address={this.state.address2}
    //       updateTheParent={this.updateParent.bind(this)}
    //     >
    //     </App3>

    //   </div>
    // );
  }
}

export default App;
