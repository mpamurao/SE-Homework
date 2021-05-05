import React, { Component } from 'react';

class Groceries extends Component {
    render() {
        return (
            <div className="groceryItem">
               
                {console.log(this.props.itemDescriptions, this.props.itemDescriptions.length)}
                {/* {`${this.props.itemDescriptions[0][0]}: ${this.props.itemDescriptions[0][1]}`} */}
                {this.props.itemDescriptions.map((description, index) => {
                    if (index === (this.props.itemDescriptions.length - 1)){
                        return null;
                    }

                    if (description.includes("units")){
                        return <div className={description[0]} key={`${description[0]}-${this.props.index}`}>{`${description[0]}:Hi`}</div>
                    }
                    return <div className={description[0]} key={`${description[0]}-${this.props.index}`}>{`${description[0]}: ${description[1]}`}</div>
                })}
               
            </div>
        );
    }
}

export default Groceries;