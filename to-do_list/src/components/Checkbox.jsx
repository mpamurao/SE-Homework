import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        return (
            <div className="checkboxContainer">
            {/* return div with checkbox */}
                <div className={this.props.strike} id={`${this.props.item}-${this.props.index}`}>
                    {/* label encapsulates the input box
                        clicking text within label will act like clicking the checkbox */}
                    <label htmlFor={`${this.props.item}-${this.props.index}`}>
                        <input type="checkbox" id={`${this.props.item}-${this.props.index}`} defaultChecked={this.props.check} 
                            value={this.props.item} label={this.props.item} 
                            onClick={() => {this.props.strikeFunction(this.props.index)}}/>
                            <span className="item">{this.props.item}</span>
                    </label>
                </div>
                <div title="delete this item" className="deleteItem" onClick={() => {this.props.deleteItem(this.props.index)}}>x</div>
            </div>
        );
    }
}

export default Checkbox;