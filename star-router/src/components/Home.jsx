import React, { Component } from 'react';
import SearchBar from './SearchBar';

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
                <div className="headerTitle">OMDb Search</div>

                <SearchBar userInput={this.state.userInput} error={this.state.error}
                    handleChange={this.handleChange} keyPress={this.keyPress} changeLink={this.changeLink} />
            </div>
        );
    }
}

export default Home;