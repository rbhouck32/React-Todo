import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thingTodo: ""
    };
  }

  handleChanges = e => {
    this.setState({ thingTodo: e.target.value });
  };

  handleAddThing = e => {
    e.preventDefault();
    this.props.addThing(this.state.thingTodo);
  };

  render() {
    return (
      <form onSubmit={this.handleAddThing}>
        <input
          type="text"
          name="thing"
          value={this.state.thingTodo}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
