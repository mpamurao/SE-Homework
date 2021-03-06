import React, { Component } from 'react';
import Checkbox from './Checkbox';

class Todo extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
            list:[],
        }
    }

    render() {
        return (
            <div className="todoContainer">
                <h1 className="helloGreeting">Hello, Happy {this.day()}!</h1> 

                {/* save userInput value in textbox */}
                <input type="text" value={this.state.userInput} placeholder="Add item..." onKeyPress={this.handleKeyPress}
                    onChange={(event) => {
                            this.changeUserInput(event.target.value);
                        }
                    }
                />

                {/* submit userInput to list array */}
                <button title="Add Item to To-Do List" onClick={this.addToList}>Add To-do</button>

                <ul>
                    {/* show each item in this.state.list */}
                    {this.state.list.map((item, index) => {
                        return <Checkbox item={item.input} index={index} key={`${item.input}-${index}`} 
                                strikeFunction={this.strikeFunction} strike={item.strike} check={item.check} deleteItem={this.deleteItem} />;
                    })}
                </ul>
            </div>
        );
    }

    // take user input and places into this.state.userInput
    changeUserInput = (input) => {
        // this.setState can take two arguments
        // first is object to be updated
        this.setState(
            {userInput: input}
        );
    }

    // take user input and add to list
    addToList = () => {
        const input = this.state.userInput;

        if (!input){
            return;
        }
        // create new var as a copy of the list array
        const listArray = this.state.list;

        // add index containing an object with input, check, and strike keys
        listArray.push({input, check:false, strike:"no-strike"});

        this.setState({
            list: listArray,
            userInput:""
        });
    }

    // call addToList when pressing enter in textbox
    handleKeyPress = (event) => {
        if (event.key === "Enter"){
            this.addToList(this.state.userInput);
        }
    }

    // className will change depending on if checkbox is checked
    strikeFunction = (index) => {
        const listArray = this.state.list;

        // if not checked, change to line-through and checked
        if (!listArray[index].check){
            listArray[index].strike = "line-through";
            listArray[index].check = true;
        }
        else{
            listArray[index].strike = "no-strike";
            listArray[index].check = false;
        }

        this.setState({list:listArray});
    }

    deleteItem = (index) => {
        const listArray = this.state.list;

        // .splice = (start, deleteCount, addItem) (start at index, remove 1 item)
        listArray.splice(index, 1);

        this.setState({list: listArray});
    }

    // declare weekdays array
    weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    day = () => {
        // date timestamp Weekday Month Day Year Time
        const date = new Date();
        
        // .getDate() gives number from 0-6 for Sun-Sat
        const today = this.weekdays[date.getDay()];
        return today;
    }
}

export default Todo;

// make components to render list items
// strike through item when completed
// stretch goal: delete a todo off the list
// hints: pass function to a component as props
// cannot mutate state directly