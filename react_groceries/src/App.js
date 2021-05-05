import React, { Component } from 'react';
import './App.css';
import GroceryList from './components/GroceryList.jsx';
import groceries from './data/groceries.js';


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      groceries
    }
    console.log(groceries)
  }
  render() {
    console.log(GroceryList)
    return (
      <div className="App">
        {this.state.groceries.map(list => {
          return <GroceryList groceries={list} key={list.name} name={list[0].name}/>
        })}
        
      </div>
    );
  }
}

export default App;