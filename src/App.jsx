import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";


function App() {

const[todoItems, setTodoItems] = useState([]);
const handleNewItems = (itemName,itemDueDate)=>{
  console.log(`New item added is ${itemName} and date is ${itemDueDate}`)
  const newFoodItem = [...todoItems, {
    name:itemName,
   dueDate: itemDueDate
 }];
 setTodoItems(newFoodItem);
}

const handleDeleteItem = (todoItemName)=>{
  const newFoodItem = todoItems.filter((item)=>item.name!==todoItemName);
  setTodoItems(newFoodItem);
  
}
  return(

    <center className ="todo-container">
     <AppName></AppName>
      <AddTodo onNewItem = {handleNewItems}></AddTodo>
      {todoItems.length===0?<WelcomeMsg></WelcomeMsg>:""}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>

    </center>

  );
}

export default App;
