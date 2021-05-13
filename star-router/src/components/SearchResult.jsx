import React, { Component } from 'react';
import config from '../config';
// import data from './dummydata';

class SearchResult extends Component {
    constructor() {
        super()

        this.state = {
            data: "",
            userInput:"",
        }
    }

    // query API and set data into state
    componentDidMount = async () => {
        const {result} = this.props.match.params;
        const apiID = config.omdbAPI.id;
        const apiKey = config.omdbAPI.key;
        const url = `http://www.omdbapi.com/?i=${apiID}&apikey=${apiKey}&t=${result}`;
        
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

    handleChange = (e) => {
        e.preventDefault()
        this.setState({userInput: e.target.value})
    }

    keyPress = (e) => {
        if (e.Key === "Enter"){
            this.handleChange();
        }
    }

    // change URL after entering input. go to SearchResult.jsx
    changeLink = (e) => {
        e.preventDefault();

        // if input is empty, add error to state
        if (!this.state.userInput){
            this.setState({error:true});
            return;
        }

        this.props.history.push(`/${this.state.userInput}`);
        window.location.reload()
    }

    render() {
        // in-line CSS format
        const movieInfoContainer = {
            display:"flex",
            flexDirection:"column",
        }
        const moviePlotImage = {
            // border:"1px solid blue",
            display:"flex",
            fontSize:"1.1rem"
        }
        const content = {
            // border:"1px solid green",
            padding:"0.3rem 1rem 0.3rem 1rem",
        }
        const movie = {
            // border:"1px solid red",
            padding:"0.3rem 25rem 0.3rem 3rem",
        }
       
        return (
            <div className="mainContainer">
                <form style={{flexDirection: "row"}}>
                    <label htmlFor="searchBox">
                        <input type="text" title="movie search" placeholder="Search for a movie..." className="searchBox"
                            value={this.state.userInput} onChange={this.handleChange} onKeyPress={this.keyPress}></input>
                    </label>

                     {/* if input is empty, show div */}
                    <button type="submit" title="submit" onClick={this.changeLink}>Submit</button> 
                    {this.state.error ? <div><b>Please enter a movie title</b></div> : null}
                </form>

                {/* if  false response, state error. else, show movie content*/}
                {this.state.data.Response === "False"
                    ? <div className="headerTitle"> {this.state.data.Error} </div>
                    : <div style={movieInfoContainer}>
                            <h1 className="headerTitle">{this.state.data.Title}</h1>
                        <div style={moviePlotImage}>
                            <div className="movieInfo" style={content}>
                                <div><b>Actors:</b> {this.state.data.Actors}</div>
                                <div><b>Writer(s):</b> {this.state.data.Writer}</div>
                                <div><b>Genre:</b> {this.state.data.Genre}</div>
                                <div><b>Year:</b> {this.state.data.Year}</div>
                                <div><b>Rating:</b> {this.state.data.Rated}</div>
                                <div><b>Runtime:</b> {this.state.data.Runtime}</div>
                                <br></br>
                                <div id="moviePlot">{this.state.data.Plot}</div>
                            </div>
                            <br></br>
                            <div className="movieImage">
                                <img src={this.state.data.Poster} alt="poster" style={movie}></img>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

    // reset state so no memory leak
    componentWillUnmount () {
        this.setState({})
    }
}

export default SearchResult;