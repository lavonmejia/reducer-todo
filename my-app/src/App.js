import './App.css';

import React, { useState, useReducer } from 'react';

import { initialState, simpleReducer } from './reducers/reducer';


import ToDoList from './TodoList';
import ToDoForm from './TodoForm';
import Todo from './Todo';


function App() {
  const [newInitialState, setNewInitialState] = useState();

  const [state, dispatch] = useReducer(simpleReducer, initialState);
   
  
  const handleChanges = e => {
    setNewInitialState(e.target.value);
  };


  toggleItem = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  return (
    <div className="App">
       
    <button
            className="far fa-edit"
            onClick={() => dispatch({ type: 'TOGGLE_EDITING', completed: newInitialState })}
          > Button Text </button>

    </div>
  );
}

export default App;




  toggleItem = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>LM's ToDo List</h1>
          <ToDoForm addItem={this.addItem} />
        </div>
        <ToDoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />

      </div>
    );
  }
}




