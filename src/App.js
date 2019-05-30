import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const ListArray = [
  {
      task: 'Churn Butter',
      id: Date.now(),
      completed: false
  },
  {
      task: 'Change Furnace Filter',
      id: Date.now(),
      completed: false
  },
  {
      task: 'Clean Powertools',
      id: Date.now(),
      completed: false
  },
  {
      task: 'Replace Sprinklerhead',
      id: Date.now(),
      completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ListArray
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


addToList = (element, item) => {
  element.preventDefault();

  const NewChore = {
      task: item,
      id: Date.now(),
      completed: false
};
this.setState({
  ListArray: [...this.state.ListArray, NewChore]
});
};


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
        ListArray={this.state.ListArray} />
        <TodoForm addToList={this.addToList}/>
      </div>
    );
  }
}

export default App;
