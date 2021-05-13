import React, { Component } from 'react';
import config from '../config';

class SearchResult extends Component {
    constructor() {
        super()

        this.state = {
            data: "",
        }
    }
    componentDidMount = async () => {
        const {result} = this.props.match.params;
        const apiKey = config.omdbAPI
        const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${result}`;
        
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            this.setState({data});
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {

        return (
            <div>
                SearchResult  
                <img src={this.state.data.Poster} alt="poster"></img>
            </div>
        );
    }
}

export default SearchResult;