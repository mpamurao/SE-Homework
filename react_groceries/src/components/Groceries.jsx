import React, { Component } from 'react';

class Groceries extends Component {
    render() {
        return (
            <div className="groceryItem">
                {/* {console.log(this.props.groceryItem, this.props.groceryItem.length)} */}
                <div className={this.props.groceryItem.item}>
                    <b>Item:</b> {this.props.groceryItem.brand} {this.props.groceryItem.item}
                </div>
                <div className="Quantity">
                    <b>Quantity: {this.props.groceryItem.quantity}</b> {this.props.groceryItem.units}
                </div>

                <button className="removeButton" onClick={() => {this.props.removeItem(this.props.index)}}>
                    Remove
                </button>
            </div>
        );
    }
}


export default Groceries;