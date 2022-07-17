import './App.css';
import React from 'react';
import App2 from './App2';
import App3 from './App3';
import CarouselComponent from './carouselComponent';


// Class Component
class ReactFormsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      userName: '',
      password: ''
    };
  }

  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  }
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    alert('User was submitted: ' + this.state.userName + ' Password submitted: ' + this.state.password);
    console.log('User was submitted: ' + this.state.userName + ' Password submitted: ' + this.state.password)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          User Name:
          <input type="text" value={this.state.userName} onChange={e => this.handleUserNameChange(e)} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={e => this.handlePasswordChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ReactFormsComponent;
