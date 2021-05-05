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
               
            </div>
        );
    }
}


export default Groceries;