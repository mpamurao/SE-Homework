import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        return (
            <div>
                 <form style={{flexDirection: "row"}}>
                    <label htmlFor="searchBox">
                        <input type="text" title="movie search" placeholder="Search for a movie, show..." className="searchBox"
                            value={this.props.userInput} onChange={this.props.handleChange} onKeyPress={this.props.keyPress}></input>
                    </label>

                     {/* if input is empty, show div */}
                    <button type="submit" title="submit" onClick={this.props.changeLink}>Submit</button> 
                    {this.props.error ? <div style={{paddingTop:"0.4rem"}}><b>Please enter a title</b></div> : null}
                </form>
            </div>
        );
    }
}

export default SearchBar;