import React, { Component } from 'react';
import './App.css';
import Groceries from './components/Groceries.jsx';
import groceries from './data/groceries.js';


class App extends Component {
  constructor() {
    super()

    // import array of objects
    this.state = {
        groceriesList: groceries,
        userInput:null,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Grocery List</h1>

        <label>
        <input type="text" placeholder="List Brand, Item, Quantity, Unit" title="List Brand, Item, Quantity, Unit"
          onChange={this.handleChange} onKeyPress={this.enterKey}></input>
        <button onSubmit={this.addToList}>Add Item</button>
        </label>

        <div className="groceryContainer">
          {this.state.groceriesList.map((item, index) => {
            return <Groceries item={item} index={index} key={`${item}-${index}`}></Groceries>
          })}
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({userInput: event.target.value})
    // console.log(this.state.userInput)
  }

  addToList = () => {
    const input = this.state.userInput;
    console.log(input)
    // if textbox value is empty
    if (!input){
      return;
    }

    // input array with "Brand, Item, Quantity, Unit" format
    const parsedInput = input.split(",");
    console.log(parsedInput)

    // get groceryList array
    const groceriesList = this.state.groceriesList;
    // create an object that'll be pushed into groceryList
    const itemDescription = {}
    

    itemDescription.item = parsedInput[1];
    itemDescription.brand = parsedInput[0];
    itemDescription.units = parsedInput[3];
    itemDescription.quantity = parsedInput[2];
    itemDescription.isPurchased = false;

    groceriesList.push(itemDescription);

    this.setState({groceriesList});
  }

  enterKey = (event) => {
    if (event.key === "Enter"){
      this.addToList()
    }
  }

  

}

export default App;