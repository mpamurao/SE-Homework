import React, { Component } from 'react';
import Groceries from './components/Groceries.jsx';
import groceries from './data/groceries.js';


class App extends Component {
  constructor() {
    super()

    // import array of objects
    this.state = {
        groceriesList: groceries,
    }
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <div className="groceryContainer">
          {this.state.groceriesList.map((list, index) => {
            const itemDescriptions = Object.entries(list);
            // console.log("item Description ", itemDescription)

            return <Groceries itemDescriptions={itemDescriptions} index={index} key={`${itemDescriptions[0][1]}-${index}`}></Groceries>
          })}
        </div>
      </div>
    );
  }
}

export default App;