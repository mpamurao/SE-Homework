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
  }

  componentDidMount() {
    const groceries = this.state.groceries;

    // organize grocery lists by name
    // .sort = sorts array. can take in a function to pass in 
    // a (2nd element) and b (1st element)
    groceries.sort((a,b) => {
      // console.log("a", a, "b", b)
      // set name to uppercase for case insensitive
      // sort converts values to UTF-16 (unicode)
      const nameA = a[0].name.toUpperCase();
      const nameB = b[0].name.toUpperCase();

      // a < b returns < 0, sort a before b
      // if returns 0, a & b are equal so remain the same order
      // a > b returns > 0, sort b before a
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
    this.setState({groceries})
  }

  render() {
    return (
      <div className="App">
        {this.state.groceries.map(list => {
          return <GroceryList groceries={list} key={list[0].name} name={list[0].name}/>
        })}
      </div>
    );
  }
}

export default App;