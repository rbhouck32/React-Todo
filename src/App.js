import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// const things = [
//   { name: "Laundry", id: 1, yetTodo: true },
//   { name: "Vaccuum", id: 2, yetTodo: true }
// ];

const storage = localStorage.getItem("todo app state");
const things = JSON.parse(storage).things;
// console.log(JSON.parse(storage));

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      things: things
    };
  }

  toggleTodo = thingId => {
    console.log("before", this.state);
    this.setState({
      things: this.state.things.map(thing => {
        if (thing.id === thingId) {
          console.log("hello", thing.id, thingId);
          return {
            ...thing,
            yetTodo: !thing.yetTodo
          };
        }
        return thing;
      })
    });
    console.log("after", this.state);
  };

  addThing = thingName => {
    this.setState({
      things: [
        ...this.state.things,
        {
          name: thingName,
          yetTodo: true,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        }
      ]
    });
  };

  clearTodo = () => {
    console.log("Ive been clicked");
    this.setState({
      things: this.state.things.filter(thing => {
        return thing.yetTodo;
      })
    });
  };

  componentDidUpdate() {
    localStorage.setItem("todo app state", JSON.stringify(this.state));
  }

  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>This is your Todo List</h2>
          <TodoForm addThing={this.addThing} />
        </div>
        <TodoList
          things={this.state.things}
          toggleTodo={this.toggleTodo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
