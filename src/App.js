import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const api = {
    baseUrl: 'https://api.github.com/'
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            githubData: []
        }
    }

    componentDidMount() {
        axios.get(api.baseUrl+'users/robertaavila')
            .then((res) => {
                console.log(res);
                this.setState({githubData: res.data.items})
                }
            )
    }

render() {
        return (
            <div className="App"></div>


        )
    }
}

export default App;
