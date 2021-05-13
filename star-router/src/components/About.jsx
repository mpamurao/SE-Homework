import React from 'react';

function About(props) {
    // in-line CSS
    const li = {
        listStyle: "circle",
        fontSize:"1.2rem"
    }

    return (
        // describe the use of the application
        <div className="mainContainer">
            <div className="headerTitle">About</div>
            <div className="aboutDescript">
                <ul>
                    <li style={li}>This application uses the OMDb API to search through a movie database.</li>
                    <li style={li}>Entering a title inside the search box will provide info on the show if there is an exact match.</li>
                    <li style={li}>The info provided includes actors, writers, genre, year released, rating, plot, and movie poster.</li>
                </ul>
                
                <h3>Happy Searching!</h3> 
            </div>
        </div>
    );
}

export default About;