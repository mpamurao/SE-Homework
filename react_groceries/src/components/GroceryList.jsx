import React, { Component } from 'react';
import GroceryItem from './GroceryItem.jsx';

class GroceryList extends Component {
    constructor(props) {
        super(props)

        // import array of objects
        this.state = {
            groceriesList: this.props.groceries,
            userInput:null,
    }
    console.log(this.state.groceriesList)
  }

  render() {
    return (
      <div className="groceryList">
        <h1 className="title">Grocery List - {this.props.name}</h1>

      {/* input textbox and button */}
      <label>
        <div className="textDescription">
          Enter an item specifying: Brand (optional), Item, Quantity, Unit (including the commas).<br></br>
        </div>
        
        <input type="text" placeholder="Brand(optional), Item, Quantity, Unit" title="List Brand, Item, Quantity, Unit"
          onChange={this.handleChange} onKeyPress={this.enterKey}></input>
        <button className="addButton" onClick={this.addToList}>Add Item</button>
      </label>

      <div className="groceryContainer">
        {this.state.groceriesList.map((item, index) => {
            if (index === 0){
                // first element is the name
                return;
            }
          // if item is not purchased, display component, else null
          return (!item.isPurchased
                  ? <GroceryItem groceryItem={item} index={index} 
                    key={`${item.item}-${index}`} removeItem={this.removeItem}/>
                  : null)
          })}
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({userInput: event.target.value});
    // console.log(this.state.userInput)
  }

  addToList = () => {
    const input = this.state.userInput;
    console.log(input);
  
    if (!input){
      return;
    }

    // count number of commas in input
    // regex to replace anything that isn't a comma to ""
    const commaCount = input.replace(/[^,]/g, "").length;

    // get groceryList array
    const groceriesList = this.state.groceriesList;

    // create an object that'll be pushed into groceryList
    const itemDescription = {
      item: input,
      brand: "",
      units: "",
      quantity: "",
      isPurchased: false,
    }

    // if input has no commas, then it's specifying only item
    if (commaCount === 0){
      groceriesList.push(itemDescription);
      this.setState({groceriesList});
      return;
    }

    // input converting string to array with "Brand(optional), Item, Quantity, Unit" format
    const parsedInput = input.split(",");

    // if input has 1 comma, then it's specifying item and qty
    if (commaCount === 1){
      itemDescription.item = parsedInput[0];
      itemDescription.quantity = parsedInput[1];

      groceriesList.push(itemDescription);
      this.setState({groceriesList});
      return;
    }

    // 2 commas specify item, qty, and units
    if (commaCount === 2){
      itemDescription.item = parsedInput[0];
      itemDescription.quantity = parsedInput[1];
      itemDescription.units = parsedInput[2];

      groceriesList.push(itemDescription);
      this.setState({groceriesList});
      return;
    }
    // 3 commas specify brand, item, qty, units
    if (commaCount === 3){
      itemDescription.brand = parsedInput[0];
      itemDescription.item = parsedInput[1];
      itemDescription.quantity = parsedInput[2];
      itemDescription.units = parsedInput[3];

      groceriesList.push(itemDescription);
      this.setState({groceriesList});
    }
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
    // when re-rendered, isPurchased is true, 
    // so won't display component
    groceriesList[index].isPurchased = true;
    this.setState({groceriesList})
  }
}

export default GroceryList;