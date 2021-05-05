import React, { Component } from 'react';

class Groceries extends Component {
    render() {
        return (
            <div className="groceryItem">
               
                {/* {console.log(this.props.item, this.props.item.length)} */}
                <div className={this.props.item.item}>
                    Item: {this.props.item.brand} {this.props.item.item}
                </div>
                <div className="Quantity">
                    Quantity: {this.props.item.quantity} {this.props.item.units}
                </div>

                <button className="removeButton" onClick={() => {this.props.removeItem(this.props.index)}}>Remove Item</button>
               
            </div>
        );
    }
}


export default Groceries;