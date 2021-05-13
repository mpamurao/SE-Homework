import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
        }
    }


    handleChange = (e) => {
        this.setState({userInput: e.target.value})
    }

    changeLink = () => {
        this.props.history.push(`/${this.state.userInput}`);
    }

    render() {
        return (
            <div className="homePage">
                <h1>Movie Search</h1>

                <form onSubmit={this.changeLink}>
                    <label htmlFor="searchBox">
                        <input type="text" placeholder="Search for a movie" id="searchBox" 
                            value={this.state.userInput} onChange={this.handleChange}></input>
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Home;