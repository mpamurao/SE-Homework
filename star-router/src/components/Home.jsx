import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
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
    }

    
    render() {
        return (
            <div className="mainContainer">
                <div className="headerTitle">Movie Search</div>

                <form>
                    <label htmlFor="searchBox">
                        <input type="text" title="movie search" placeholder="Search for a movie..." className="searchBox"
                            value={this.state.userInput} onChange={this.handleChange} onKeyPress={this.keyPress}></input>
                    </label>

                    {/* if input is empty, show div */}
                    {this.state.error ? <div><b>Please enter a movie title</b></div> : null}

                    <button type="submit" title="submit" onClick={this.changeLink}>Submit</button>    
                </form>
            </div>
        );
    }
}

export default Home;