import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
    const navBar = {
        border:"none",
        backgroundColor:"red",
        display:"flex",
        justifyContent: "flex-end",
        boxShadow:"1px 3px 1px 1px black",
    }

    const links = {
        padding:"0.5rem",
        marginTop:"0.5rem",
        textAlign:"center",
        textDecoration:"none",
        fontSize:"1.2rem",
        fontWeight:"bold",
        color:"white",
        textShadow:"1px 1px black",
        backgroundColor:"red"
    }

    return (
        <div className="navBar" style={navBar}>
            <Link to="/" style={links}><button style={links}>Home</button></Link>
            <Link to="/about" style={links}><button style={links}>About</button></Link>
        </div>
    );
}

export default NavBar;