import React, { Component } from 'react';

class Checkbox extends Component {
    // transfer props to state
    constructor (props) {
        super(props)

        this.state = {
            item:this.props.item,
            index:this.props.index,
            strike:"no-strike",
        }
    }

    render() {
        return (
            <div className="checkboxContainer">
            {/* return div with checkbox */}
                <div className={this.state.strike} id={`${this.state.item}-${this.state.index}`}>
                    {/* label encapsulates the input box
                        clicking text within label will act like clicking the checkbox */}
                    <label htmlFor={`${this.state.item}-${this.state.index}`}>
                        <input type="checkbox" id={`${this.state.item}-${this.state.index}`} 
                            value={this.state.item} label={this.state.item} onClick={this.strikeFunction}/>
                            <span className="item">{this.state.item}</span>
                    </label>
                </div>
                <div title="delete this item" className="deleteItem" onClick={() => {this.props.deleteItem(this.state.index)}}>x</div>
            </div>
        );
    }

    // className will change depending on if checkbox is checked
    strikeFunction = () => {
        // if strike is none, change to line-through
        if (this.state.strike === "no-strike"){
            this.setState({strike: "line-through", check:true});
        }
        else{
            this.setState({strike:"no-strike", check:false});
        }
    }
}

export default Checkbox;