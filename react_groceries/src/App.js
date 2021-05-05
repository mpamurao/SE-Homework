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

      {/* input textbox and button */}
      <label>
        <div className="textDescription">
          List in order: Brand, Item, Quantity, Unit (including the commas)
        </div>
        
        <input type="text" placeholder="Brand, Item, Quantity, Unit" title="List Brand, Item, Quantity, Unit"
          onChange={this.handleChange} onKeyPress={this.enterKey}></input>
        <button onClick={this.addToList}>Add Item</button>
      </label>

      <div className="groceryContainer">
        {this.state.groceriesList.map((item, index) => {
          // if item is not purchased, display component
          return (!item.isPurchased
                  ? <Groceries item={item} index={index} key={`${item}-${index}`} removeItem={this.removeItem}/>
                  : null)


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
  
    // count number of commas are in input. regex to replace anything that doesn't match comma to ""
    const commaCount = input.replace(/[^,]/g, "").length;

    // if textbox value is empty or the correct format with commas are not specified, return
    if (!input || commaCount !== 3){
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

  // when enter key is pressed in textbox, call addToList
  enterKey = (event) => {
    if (event.key === "Enter"){
      this.addToList()
    }
  }

  // called when clicking remove button
  removeItem = (index) => {
    const groceriesList = this.state.groceriesList;
    // set isPurchased to true
    groceriesList[index].isPurchased = true;
    this.setState({groceriesList})
    // when re-rendered, isPurchased is true, 
    // so won't display component
  }
  

}

export default App;