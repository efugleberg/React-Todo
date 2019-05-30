import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

const ListArray = [
  {
      task: 'Churn Butter',
      id: 32343,
      completed: false
  },
  {
      task: 'Change Furnace Filter',
      id: 2342343,
      completed: false
  },
  {
      task: 'Clean Powertools',
      id: 234323,
      completed: false
  },
  {
      task: 'Replace Sprinklerhead',
      id: 92384,
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

toggleItem = id => {
  this.setState(prevState => {
    return {
    ListArray: prevState.ListArray.map(item => {
      if (id === item.id) {
        return {...item, completed: !item.completed};
      } else {
        return item;
      }
    })
  }
})
}

addToList = (element, item) => {
  element.preventDefault();

  const NewChore = {
      task: item,
      id: Date.now(),
      completed: false
};
this.setState(prevState => {
  return {
  ListArray: [...prevState.ListArray, NewChore]
}
});
};


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
        ListArray={this.state.ListArray} 
        toggleItem={this.toggleItem} />

        <TodoForm 
        addToList={this.addToList}/>
      </div>
    );
  }
}

export default App;
