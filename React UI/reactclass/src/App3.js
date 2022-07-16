import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import restaurants from './restaurants';
import 'react-bootstrap-typeahead/css/Typeahead.css'


class App2 extends React.Component {

    //Mounting stage 1
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            age: props.age,
            address: props.address
        }
    }
    //Mounting stage 2
    componentWillMount() {
        console.log("Mounting stage 2")

    }
    //Mounting stage 4
    componentDidMount() {
        console.log("Mounting stage 4")

    }

    componentWillReceiveProps(prevProps, nextProps) {
        this.setState({ name: nextProps.name, age: nextProps.age })
    }

    //Updation Stage 1
    shouldComponentUpdate() {
        return true;
    }

    //Updation Stage 2
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Updation stage 2")
    }

    //Updation Stage 3
    componentDidUpdate() {
        console.log("Updation stage 3")
    }

    // Unmounting Stage 1
    componentWillUnmount() {
        console.log("Unmounting stage 1")
    }

    updateMe = (e) => {
        if (e.type === 'click' || e.type === 'mouseDown') {
            var age = Number(this.state.age);
            this.setState({ age: age + 1 });
            this.props.updateTheParent(age + 1);
        }
    }

    //Mounting stage 3
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Typeahead options={restaurants} placeholder="Enter the location Name" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>
                        {this.state.name}
                    </p>
                    <p>
                        {this.state.address}
                    </p>
                    <span className="App-link"
                        onClick={e => this.updateMe(e)}
                        rel="noopener noreferrer">{this.state.age}
                    </span>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App2;