import { useState } from "react";
import './App.css';

// Importing the components
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"



// Setting the useState hook to take the data
// to be displayed in the list . Using an array 
// with 2 key value pairs.
// One to show the todo and another to track completed ones
// Syntax is:
// const [ variable, setVariable ] = useState(initState)
// Should be kept in the root so data can be passed down from
// parent (App) to child.


const App = () => {

  const [todoItems, setTodoItems] = useState(
    [{todo: "Sample task. Click X to delete",
    done: false}
    ])
    
// Creating a function to copy the array with the spread operator
// Takes todo as parameter and is inserted into array with same
// key value pairs (todo and done).
// This function is then passed down to TodoInput.js
  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, done: false }];
    setTodoItems(newTodoItems);
    };

// Creating a delete todo function which takes the index as 
// a parameter. Makes a copy of current array using spread operator
// and uses splice method to remove 1 entry at the index of the item
// This function is passed down to TodoItem
  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(index, 1)
    setTodoItems(newTodoItems)
  }

// Creating function to mark items as completed when done.
// Spread operator is again used to make a copy of the array
// Then a ternary operator is used if the value is true or false
// (Syntax is 'Condition ? if True do this : if false do this')
// This one sets it to true if false and vice versa
  const isDone = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].done === false ? (newTodoItems[index].done = true) : (newTodoItems[index].done = false);
    setTodoItems(newTodoItems)
    };
  
// TodoItem creates an array with todoItems.map
// (as we cannot alter state directly)
// Each element is called 'item' representing each object
// along with its index within the array, so they can be selected
// This is passed down to TodoItem.js
  return (
    <div className="app">
      <Header />
      
      <TodoInput createTodoItem={createTodoItem} />
      {todoItems.map((item, index) => (
      <TodoItem 
      key={index} 
      index={index}
      item={item}
      deleteTodoItem={deleteTodoItem}
      isDone={isDone} />
))}

    </div>
  )
}

export default App;